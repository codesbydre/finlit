const express = require("express");
const router = express.Router();
const axios = require("axios");
const { NEWS_KEY } = require("../secrets");

// Get top business headlines in US from API
router.get("/", async (req, res) => {
  try {
    const newsApiResponse = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_KEY}`
    );
    res.json(newsApiResponse.data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).send("Error fetching news");
  }
});

// Get top headlines by category from API
router.get("/category/:categoryName", async (req, res) => {
  const { categoryName } = req.params;
  try {
    const newsApiResponse = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${categoryName}&country=us&apiKey=${NEWS_KEY}`
    );
    res.json(newsApiResponse.data.articles || newsApiResponse.data);
  } catch (error) {
    console.error("Error fetching news by category:", error);
    res.status(500).send("Error fetching news by category");
  }
});

// Search news by keyword
router.get("/search", async (req, res) => {
  const { q } = req.query; // q is the search query
  if (!q) {
    return res.status(400).send("Search query is required");
  }

  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: q,
        apiKey: NEWS_KEY,
      },
    });
    res.json(response.data.articles);
  } catch (error) {
    console.error("Error searching for news:", error);
    res.status(500).send("Error searching for news");
  }
});

module.exports = router;
