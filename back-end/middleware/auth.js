const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  console.log("Authenticating token...");
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    console.log("No token provided");
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("Bearer token not found");
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Token verification failed:", err.message);
      return res.sendStatus(403);
    }
    console.log("Token is valid, user:", user);
    res.locals.user = user;
    next();
  });
}

function ensureLoggedIn(req, res, next) {
  console.log("Checking if user is logged in...");
  if (!res.locals.user) {
    console.log("User is not logged in");
    return res.status(401).send("Unauthorized: No user logged in");
  }
  next();
}

function ensureAdmin(req, res, next) {
  console.log("Checking if user is admin...");
  if (!res.locals.user || !res.locals.user.is_admin) {
    console.log("Access denied: User is not admin");
    return res.status(403).send("Unauthorized: Access restricted to admin");
  }
  next();
}

function ensureCorrectUserOrAdmin(req, res, next) {
  console.log("Checking if user is correct user or admin...");
  const user = res.locals.user;
  if (!(user && (user.is_admin || user.username === req.params.username))) {
    console.log("Access denied: User is not correct user or admin");
    return res
      .status(403)
      .send("Unauthorized: You do not have permission to access this");
  }
  next();
}

module.exports = {
  authenticateToken,
  ensureLoggedIn,
  ensureAdmin,
  ensureCorrectUserOrAdmin,
};
