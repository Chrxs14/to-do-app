import React from "react";
import { ImCheckmark2, ImCross } from "react-icons/im";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className={`${props.completed && "text-completed"}`}>
      <span>
        <ImCheckmark2
          className={`checkItem ${props.completed && "checkitem--active"}`}
        />
      </span>
      <p>{props.text}</p>
      <span>
        <ImCross className="eliminateItem" />
      </span>
    </li>
  );
};

export { TodoItem };
