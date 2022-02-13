import React, { Component } from "react";
import "./PostStatusFilter.css";
// const PostSatusFilter = () => {
//   return (
//     <div className="btn-group">
//       <button type="button" className="btn btn-info">
//         Все
//       </button>
//       <button type="button" className="btn btn-outline-secondary">
//         Понравилось
//       </button>
//     </div>
//   );
// };

// export default PostSatusFilter;
export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", lable: "Все" },
      { name: "like", lable: "Понравилось" },
    ];
  }
  render() {
    const buttons = this.buttons.map(({ name, lable }) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onFilterSelect(name)}
        >
          {lable}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
