import React from "react";
import CategoriesList from "../components/CategoriesList";
import CompaniesList from "../components/CompaniesList";
import Search from "../components/Search";
import TopHeadlines from "../components/TopHeadlines";

function NewsPage() {
  return (
    <div className="container-lg mt-4">
      <Search />
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-3">
          <CategoriesList />
          <CompaniesList />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-9">
          <TopHeadlines category="business" />
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
