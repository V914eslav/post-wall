import React from "react";
import PostListItem from "../PostListItem";
const PostList = ({ posts }) => {
  const elements = posts.map((post) => {
    const { id, ...postItem } = post;
    return (
      <li key={post.id} className="list-group-item">
        <PostListItem {...postItem} />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
