import React from "react";

// import React, { Component } from "react";
import "./PostListItem.css";

// export default class PostListItem extends Component {
//   render() {
//     const {
//       label,
//       onDelete,
//       onToggleImportant,
//       onToggleLiked,
//       important,
//       like,
//     } = this.props;
//     let classNames = "app-list-item d-flex justify-content-between";
//     if (important) {
//       classNames += " important";
//     }
//     if (like) {
//       classNames += " like";
//     }
//     return (
//       <div className={classNames}>
//         <span className=" app-list-item-label">{label}</span>
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-star btn-sm"
//             onClick={onToggleImportant}
//           >
//             <i className="bi bi-star-fill"></i>
//           </button>
//           <button type="button" className="btn-trash btn-sm">
//             <i className="bi bi-trash" onClick={onDelete}></i>
//           </button>
//           <button
//             onClick={onToggleLiked}
//             type="button"
//             className="btn-heart btn-sm"
//           >
//             <i className="bi bi-heart-fill"></i>
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

function PostListItem(props) {
  const { label, onDelete, onToggleImportant, onToggleLiked, important, like } =
    props;
  let classNames = "app-list-item d-flex justify-content-between";
  if (important) {
    classNames += " important";
  }
  if (like) {
    classNames += " like";
  }
  return (
    <div className={classNames}>
      <span className=" app-list-item-label">{label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm"
          onClick={onToggleImportant}
        >
          <i className="bi bi-star-fill"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="bi bi-trash" onClick={onDelete}></i>
        </button>
        <button
          onClick={onToggleLiked}
          type="button"
          className="btn-heart btn-sm"
        >
          <i className="bi bi-heart-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default PostListItem;
