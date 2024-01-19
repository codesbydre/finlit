require("dotenv").config();
const app = require("./app");
const port = 3001;

app.get("/", (req, res) => {
  res.send("Backend running!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
