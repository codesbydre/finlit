const express = require("express");
const cors = require("cors");

const newsRoute = require("./routes/news");
const usersRoute = require("./routes/users");
const quizRoute = require("./routes/quizzes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/news", newsRoute);
app.use("/api/users", usersRoute);
app.use("/api/quizzes", quizRoute);

module.exports = app;
