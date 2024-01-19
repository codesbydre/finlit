const request = require("supertest");
const axios = require("axios");
const app = require("../app");

jest.mock("axios");

describe("GET /api/news", () => {
  it("should fetch top headlines", async () => {
    axios.get.mockResolvedValue({
      data: { articles: [{ title: "Test Article" }] },
    });

    const response = await request(app).get("/api/news");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([{ title: "Test Article" }]);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining("top-headlines?country=us")
    );
  });
});

describe("GET /api/news/category/:categoryName", () => {
  it("should fetch headlines by category", async () => {
    const categoryName = "business";
    axios.get.mockResolvedValue({
      data: { articles: [{ title: "Business News" }] },
    });

    const response = await request(app).get(
      `/api/news/category/${categoryName}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([{ title: "Business News" }]);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(`category=${categoryName}`)
    );
  });
});

describe("GET /api/news/search", () => {
  it("should search news articles", async () => {
    const query = "finance";
    axios.get.mockResolvedValue({
      data: { articles: [{ title: "Finance News" }] },
    });

    const response = await request(app).get(`/api/news/search?q=${query}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([{ title: "Finance News" }]);

    // Updated assertion
    expect(axios.get).toHaveBeenCalledWith(
      `https://newsapi.org/v2/everything`,
      {
        params: {
          q: query,
          apiKey: expect.any(String),
        },
      }
    );
  });
});
