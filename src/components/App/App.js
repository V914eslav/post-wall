import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostSatusFilter from "../PostSatusFilter";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostSatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
};
export default App;
