import React from "react";
import PostListItem from "../PostListItem";
import { ListGroup } from "reactstrap";
import "./PostList.css";
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((post) => {
    const { id, ...postItem } = post;
    return (
      <li key={post.id} className="list-group-item">
        <PostListItem
          {...postItem}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });
  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
