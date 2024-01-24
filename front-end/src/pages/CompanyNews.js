import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsArticle from "../components/NewsArticle";
import Search from "../components/Search";

function CompanyNews() {
  const { companyName } = useParams();
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/news/search?q=${companyName}`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching news for company: ${companyName}`, error);
        setError(`Failed to load news articles for company: ${companyName}`);
      });
  }, [companyName]);

  return (
    <div>
      <h1>{companyName} News</h1>
      <Search />
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsArticle key={index} article={article} />
          ))
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>Loading news articles for {companyName}...</div>
        )}
      </div>
    </div>
  );
}

export default CompanyNews;
