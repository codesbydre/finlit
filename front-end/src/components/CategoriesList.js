import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const CategoriesList = () => {
  const navigate = useNavigate();
  const categories = [
    "business",
    "technology",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
  ];

  const handleCategoryClick = (category) => {
    navigate(`/news/${category}`);
  };

  return (
    <div className="list-group my-4 sidebar-section">
      <h4>Category</h4>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className="list-group-item list-group-item-action"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoriesList;
