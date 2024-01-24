import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsArticle from "../components/NewsArticle";
import Search from "../components/Search";
import CategoriesList from "../components/CategoriesList";
import CompaniesList from "../components/CompaniesList";

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
      <div className="container-lg mt-4">
        <Search />
        <div className="row">
          <div className="col-md-2">
            <CategoriesList />
            <CompaniesList />
          </div>
          <div className="col-md-10 my-4">
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)} News</h4>
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
        </div>
      </div>
    </div>
  );
}

export default CategoryNews;
