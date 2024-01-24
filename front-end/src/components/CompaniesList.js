import React from "react";
import { useNavigate } from "react-router-dom";

const CompaniesList = () => {
  const navigate = useNavigate();
  const companies = [
    "Apple",
    "Microsoft",
    "Amazon",
    "Google",
    "Tesla",
    "Meta",
    "JP Morgan",
    "Coca-Cola",
    "Nike",
    "Boeing",
    "Visa",
    "Walmart",
    "Pfizer",
    "Netflix",
    "Samsung",
    "Oracle",
    "Toyota",
  ];

  const handleCompanyClick = (company) => {
    navigate(`/company-news/${company}`);
  };

  return (
    <div className="list-group my-4">
      <h4>Company</h4>
      {companies.map((company) => (
        <button
          key={company}
          onClick={() => handleCompanyClick(company)}
          className="list-group-item list-group-item-action"
        >
          {company}
        </button>
      ))}
    </div>
  );
};

export default CompaniesList;
