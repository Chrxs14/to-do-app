import React from "react";
import { ImCheckmark2, ImCross } from "react-icons/im";
import "./TodoItem.css";

const TodoItem = (props) => {
  const [completedState, setCompletedState] = React.useState(props.completed);
  const { todo, onToggleCompleted } = props;

  const handleToggleCompleted = () => {
    const updateState = {
      ...todo,
      completed: !todo.completed,
    };
    onToggleCompleted(updateState);
  };
  return (
    <li className={`${todo.completed && "text-completed"}`}>
      <span>
        <ImCheckmark2
          className={`checkItem ${todo.completed && "checkitem--active"}`}
          onClick={handleToggleCompleted}
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
