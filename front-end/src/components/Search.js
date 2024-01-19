import React, { useState } from "react";
import axios from "axios";
import NewsArticle from "./NewsArticle";

function Search() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.get(`/api/news/search?q=${query}`);
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Error fetching search results");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news articles"
        />
        <button type="submit">Search</button>
      </form>

      {error && <div>{error}</div>}
      <div className="row">
        {articles.map((article, index) => (
          <NewsArticle key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Search;
