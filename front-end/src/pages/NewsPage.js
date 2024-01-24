import React from "react";
import CategoriesList from "../components/CategoriesList";
import Search from "../components/Search";
import TopHeadlines from "../components/TopHeadlines";

function NewsPage() {
  return (
    <div className="container-lg mt-4">
      <h1>News</h1>
      <Search />
      <div className="row">
        <div className="col-md-2">
          <CategoriesList />
        </div>
        <div className="col-md-10">
          <TopHeadlines category="business" />
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
