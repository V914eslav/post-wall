import React, { Component } from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";

import "./App.css";

import styled from "styled-components";

const AppBLock = styled.div`
  margin: 100px auto 100px;
  max-width: 800px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to lealrn React", important: true, id: 1 },
        { label: "That is so good", important: false, id: 2 },
        { label: "I need a break...", important: false, id: 3 },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  }
  addItem(body) {
    const newItem = {
      labal: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  render() {
    return (
      <AppBLock className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </AppBLock>
    );
  }
}
