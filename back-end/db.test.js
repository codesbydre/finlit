require("dotenv").config();
const { Pool } = require("pg");
const { getDatabaseUri } = require("./db");
const { USERNAME, PASSWORD } = require("./secrets");

const testUsername = "testuser";
const testPassword = "testpassword";

describe("Database Connection", () => {
  it("should use the correct database URI for the test environment", () => {
    process.env.NODE_ENV = "test";
    const testUri = getDatabaseUri();
    expect(testUri).toBe(
      `postgresql://${testUsername}:${testPassword}@localhost/finlit_test`
    );
  });

  it("should use the correct database URI for the production environment", () => {
    process.env.NODE_ENV = "production";
    const prodUri = getDatabaseUri();
    expect(prodUri).toBe(
      process.env.DATABASE_URL ||
        `postgresql://${USERNAME}:${PASSWORD}@localhost/finlit`
    );
  });

  it("should create a new Pool instance", () => {
    const { pool } = require("./db");
    expect(pool).toBeInstanceOf(Pool);
  });
});
