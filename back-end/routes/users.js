const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db").pool;
const router = express.Router();
const { authenticateToken, ensureLoggedIn } = require("../middleware/auth");

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { username, password, first_name, last_name, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      "INSERT INTO users (username, password, first_name, last_name, email) VALUES ($1, $2, $3, $4, $5) RETURNING username, first_name, last_name, email, is_admin",
      [username, hashedPassword, first_name, last_name, email]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    console.error("Error registering new user:", error);
    res.status(500).send("Error registering new user");
  }
});

// User Login and Authentication
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (result.rows.length > 0) {
      const validPassword = await bcrypt.compare(
        password,
        result.rows[0].password
      );
      if (!validPassword)
        return res.status(400).send("Invalid username or password.");

      const token = jwt.sign(
        {
          username: result.rows[0].username,
          is_admin: result.rows[0].is_admin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.json({ token });
    } else {
      res.status(400).send("Invalid username or password.");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Error logging in");
  }
});

//Save a favorite article for a user
router.post(
  "/save-article",
  authenticateToken,
  ensureLoggedIn,
  async (req, res) => {
    try {
      const { username } = req.user;
      const {
        article_title,
        article_description,
        article_image_url,
        article_link,
        article_published_at,
      } = req.body;

      await pool.query(
        "INSERT INTO saved_articles (user_username, article_title, article_description, article_image_url, article_link, article_published_at) VALUES ($1, $2, $3, $4, $5, $6)",
        [
          username,
          article_title,
          article_description,
          article_image_url,
          article_link,
          article_published_at,
        ]
      );

      res.status(201).send("Article saved successfully");
    } catch (error) {
      console.error("Error saving article:", error);
      res.status(500).send("Error saving article");
    }
  }
);

//Get a user's favorite articles
router.get(
  "/favorite-articles",
  authenticateToken,
  ensureLoggedIn,
  async (req, res) => {
    try {
      const { username } = req.user;

      const result = await pool.query(
        "SELECT * FROM saved_articles WHERE user_username = $1",
        [username]
      );

      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching favorite articles:", error);
      res.status(500).send("Error fetching favorite articles");
    }
  }
);

// Get a user's profile data (favorite articles and quiz scores)
router.get("/profile", authenticateToken, ensureLoggedIn, async (req, res) => {
  try {
    const { username } = req.user;

    // Fetch favorite articles
    const articlesResult = await pool.query(
      "SELECT * FROM saved_articles WHERE user_username = $1",
      [username]
    );

    // Fetch quiz scores
    const scoresResult = await pool.query(
      "SELECT quiz_id, score FROM quiz_attempts WHERE user_username = $1",
      [username]
    );

    res.json({
      favoriteArticles: articlesResult.rows,
      quizScores: scoresResult.rows,
    });
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).send("Error fetching profile data");
  }
});

// DELETE route to remove a favorite article for a user
router.delete(
  "/remove-article/:username/:articleId",
  authenticateToken,
  ensureLoggedIn,
  async (req, res) => {
    const { username, articleId } = req.params;

    try {
      // Delete the article from 'saved_articles' where the 'id' matches and belongs to the user
      const deleteQuery =
        "DELETE FROM saved_articles WHERE user_username = $1 AND id = $2";
      const result = await pool.query(deleteQuery, [username, articleId]);

      if (result.rowCount === 0) {
        return res
          .status(404)
          .send(
            "Article not found or user does not have permission to delete this article."
          );
      }

      res.status(200).send("Article removed from favorites.");
    } catch (error) {
      console.error("Error removing article from favorites:", error);
      res.status(500).send("Error removing article from favorites");
    }
  }
);

module.exports = router;
