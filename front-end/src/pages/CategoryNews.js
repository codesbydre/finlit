import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsArticle from "../components/NewsArticle";

function CategoryNews() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/news/category/${category}`)
      .then((response) => {
        console.log("API Response:", response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching news for category: ${category}`, error);
        setError(`Failed to load news articles for category: ${category}`);
      });
  }, [category]);

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsArticle key={index} article={article} />
          ))
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>Loading news articles for {category}...</div>
        )}
      </div>
    </div>
  );
}

export default CategoryNews;
