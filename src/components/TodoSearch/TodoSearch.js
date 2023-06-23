import React from "react";
import { ImSearch } from "react-icons/im";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <div className="todoList">
      <div>
        <ImSearch className="searchIcon" />
        <input
          type="text"
          placeholder="Buscar"
          value={searchValue}
          onChange={(event) => {
            console.log(searchValue);
            setSearchValue(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export { TodoSearch };
