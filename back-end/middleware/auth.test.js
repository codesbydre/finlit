const jwt = require("jsonwebtoken");
const {
  authenticateToken,
  ensureLoggedIn,
  ensureAdmin,
  ensureCorrectUserOrAdmin,
} = require("./auth");

jest.mock("jsonwebtoken");

describe("authenticateToken", () => {
  it("should authenticate token successfully", () => {
    const req = {
      headers: {
        authorization: "Bearer mockToken",
      },
    };
    const res = { locals: {}, sendStatus: jest.fn() };
    const next = jest.fn();

    jwt.verify.mockImplementation((token, secret, callback) => {
      callback(null, { username: "testuser", is_admin: false });
    });

    authenticateToken(req, res, next);
    expect(res.locals.user).toBeDefined();
    expect(next).toHaveBeenCalled();
  });

  it("should return 401 if token is not provided", () => {
    const req = { headers: {} };
    const res = { sendStatus: jest.fn() };
    const next = jest.fn();

    authenticateToken(req, res, next);
    expect(res.sendStatus).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });
});

describe("ensureLoggedIn", () => {
  it("should pass if user is logged in", () => {
    const req = {};
    const res = { locals: { user: { username: "testuser" } } };
    const next = jest.fn();

    ensureLoggedIn(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it("should return 401 if no user is logged in", () => {
    const req = {};
    const res = {
      locals: {},
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const next = jest.fn();

    ensureLoggedIn(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith("Unauthorized: No user logged in");
  });
});

describe("ensureAdmin", () => {
  it("should pass for admin users", () => {
    const req = {};
    const res = { locals: { user: { is_admin: true } } };
    const next = jest.fn();

    ensureAdmin(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it("should return 403 for non-admin users", () => {
    const req = {};
    const res = {
      locals: { user: { is_admin: false } },
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const next = jest.fn();

    ensureAdmin(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith(
      "Unauthorized: Access restricted to admin"
    );
  });

  it("should return 403 if no user is present", () => {
    const req = {};
    const res = {
      locals: {},
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const next = jest.fn();

    ensureAdmin(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith(
      "Unauthorized: Access restricted to admin"
    );
  });
});

describe("ensureCorrectUserOrAdmin", () => {
  it("should pass for correct user", () => {
    const req = { params: { username: "testuser" } };
    const res = { locals: { user: { username: "testuser", is_admin: false } } };
    const next = jest.fn();

    ensureCorrectUserOrAdmin(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it("should pass for admin user", () => {
    const req = { params: { username: "anotheruser" } };
    const res = { locals: { user: { username: "adminuser", is_admin: true } } };
    const next = jest.fn();

    ensureCorrectUserOrAdmin(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it("should return 403 for incorrect user", () => {
    const req = { params: { username: "anotheruser" } };
    const res = {
      locals: { user: { username: "testuser", is_admin: false } },
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const next = jest.fn();

    ensureCorrectUserOrAdmin(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith(
      "Unauthorized: You do not have permission to access this"
    );
  });

  it("should return 403 if no user is present", () => {
    const req = { params: { username: "testuser" } };
    const res = {
      locals: {},
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const next = jest.fn();

    ensureCorrectUserOrAdmin(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith(
      "Unauthorized: You do not have permission to access this"
    );
  });
});
