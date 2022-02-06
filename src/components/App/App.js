import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";

import "./App.css";

const App = () => {
  const data = [
    { label: "Going to lealrn React", important: true, id: "1dsafa" },
    { label: "That is so good", important: false, id: "2sdfa" },
    { label: "I need a break...", important: false, id: "3asdfa" },
  ];
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};
export default App;
