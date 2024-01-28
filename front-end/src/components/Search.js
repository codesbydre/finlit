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
      const response = await axios.get(
        `https://finlit.onrender.com/api/news/search?q=${query}`
      );
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Error fetching search results");
    }
  };

  return (
    <div className="input-group mb-3">
      <form
        onSubmit={handleSearch}
        className="form-outline flex-grow-1 d-flex pb-3"
      >
        <input
          type="search"
          id="form1"
          className="form-control w-50"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news articles by topic or company..."
        />
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <br />

      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {articles.map((article, index) => (
          <NewsArticle key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Search;
