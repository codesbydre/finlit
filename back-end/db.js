const { Pool } = require("pg");
const { USERNAME, PASSWORD } = require("./secrets");
const testUsername = "testuser";
const testPassword = "testpassword";

function getDatabaseUri() {
  if (process.env.NODE_ENV === "test") {
    return `postgresql://${testUsername}:${testPassword}@localhost/finlit_test`;
  } else {
    return (
      process.env.DATABASE_URL ||
      `postgresql://${USERNAME}:${PASSWORD}@localhost/finlit`
    );
  }
}

const pool = new Pool({
  connectionString: getDatabaseUri(),
});

module.exports = { pool, getDatabaseUri };
