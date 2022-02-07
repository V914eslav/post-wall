import React from "react";
import { Button } from "reactstrap";
import "./PostStatusFilter.css";
const PostSatusFilter = () => {
  return (
    <div className="btn-group">
      <Button outline color="info">
        Все
      </Button>
      {/* <button type="button" className="btn btn-info">
        Все
      </button> */}
      <button type="button" className="btn btn-outline-secondary">
        Понравилось
      </button>
    </div>
  );
};

export default PostSatusFilter;
