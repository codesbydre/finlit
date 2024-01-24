import React from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import CategoriesList from "../components/CategoriesList";
import CompaniesList from "../components/CompaniesList";
import TopHeadlines from "../components/TopHeadlines";

function CategoryNews() {
  const { category } = useParams();

  return (
    <div className="container-lg mt-4">
      <Search />
      <div className="row">
        <div className="col-md-2">
          <CategoriesList />
          <CompaniesList />
        </div>
        <div className="col-md-10">
          <TopHeadlines category={category} />
        </div>
      </div>
    </div>
  );
}

export default CategoryNews;
