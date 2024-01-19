import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from "./NewsArticle";

function TopHeadlines({ category = "" }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching news for category:", category);
    const apiUrl = category ? `/api/news/category/${category}` : "/api/news";
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Articles received:", response.data);
        setArticles(
          Array.isArray(response.data) ? response.data : response.data.articles
        );
      })
      .catch((error) => {
        console.error(
          `Error fetching ${category ? category + " " : ""}headlines:`,
          error
        );
        setError(`Error fetching ${category ? category + " " : ""}headlines`);
      });
  }, [category]);

  return (
    <div className="container my-4">
      <h2>
        {category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} `
          : ""}
        Top Headlines
      </h2>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsArticle key={index} article={article} />
          ))
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>Loading top headlines...</div>
        )}
      </div>
    </div>
  );
}

export default TopHeadlines;
