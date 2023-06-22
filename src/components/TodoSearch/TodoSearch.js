import React from "react";
import { ImSearch } from "react-icons/im";
import "./TodoSearch.css";

const TodoSearch = () => {
  return (
    <div className="todoList">
      <div>
        <ImSearch className="searchIcon" />
        <input type="text"></input>
      </div>
    </div>
  );
};

export { TodoSearch };
