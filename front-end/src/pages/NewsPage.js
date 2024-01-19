import React from "react";
import CategoriesList from "../components/CategoriesList";
import Search from "../components/Search";
import TopHeadlines from "../components/TopHeadlines";

function NewsPage() {
  return (
    <div>
      <h1>News</h1>
      <Search />
      <CategoriesList />
      <TopHeadlines />
    </div>
  );
}

export default NewsPage;
