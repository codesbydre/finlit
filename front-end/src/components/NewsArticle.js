import React from "react";

function NewsArticle({ article }) {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="card-img-top"
          />
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
          <p className="card-text">{article.description}</p>
          {article.author && (
            <p className="card-text">
              <small>By {article.author}</small>
            </p>
          )}
          {article.publishedAt && (
            <p className="card-text">
              <small>{new Date(article.publishedAt).toLocaleString()}</small>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;
