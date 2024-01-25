import React from "react";
import "./NewsArticle.css";

function NewsArticle({ article }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (article.title === "[Removed]" || article.description === "[Removed]") {
    return null;
  }

  return (
    <div className="col-md-4">
      <div className="card mb-3">
        {article.urlToImage && (
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="card-img-top"
            />
          </a>
        )}
        <div className="card-body">
          <h5 className="card-title">
            {article.url ? (
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            ) : (
              article.title
            )}
          </h5>
          <p className="card-text description">{article.description}</p>
          {article.author && (
            <p className="card-text">
              <small className="author">{article.author}</small>
            </p>
          )}
          {article.publishedAt && (
            <p className="card-text date">
              <small>{formatDate(article.publishedAt)}</small>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;
