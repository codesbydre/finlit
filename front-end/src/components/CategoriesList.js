import React from "react";
import { useNavigate } from "react-router-dom";

const CategoriesList = () => {
  const navigate = useNavigate();
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleCategoryClick = (category) => {
    navigate(`/news/${category}`);
  };

  return (
    <div className="categories-list">
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoriesList;
