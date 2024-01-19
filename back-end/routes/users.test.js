const request = require("supertest");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = require("../app");
const pool = require("../db").pool;

jest.mock("../db", () => {
  const originalModule = jest.requireActual("../db");
  return {
    __esModule: true,
    ...originalModule,
    pool: {
      query: jest.fn(),
    },
  };
});

jest.mock("bcrypt");
jest.mock("jsonwebtoken");

const mockUser = {
  username: "testuser",
  password: "testpassword",
  first_name: "Test",
  last_name: "User",
  email: "test@example.com",
};

describe("POST /api/users/register", () => {
  it("should register a new user", async () => {
    bcrypt.hash.mockResolvedValue("hashedpassword");
    pool.query.mockResolvedValue({ rows: [mockUser] });

    const response = await request(app)
      .post("/api/users/register")
      .send(mockUser);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(mockUser);
  });
});

describe("POST /api/users/login", () => {
  it("should authenticate user and return a token", async () => {
    bcrypt.compare.mockResolvedValue(true);
    jwt.sign.mockReturnValue("token");
    pool.query.mockResolvedValue({
      rows: [{ ...mockUser, password: "hashedpassword" }],
    });

    const response = await request(app)
      .post("/api/users/login")
      .send({ username: mockUser.username, password: mockUser.password });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});
