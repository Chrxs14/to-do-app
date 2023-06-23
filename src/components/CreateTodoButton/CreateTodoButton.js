import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  return (
    <div className="buttonCreate">
      <button
        onClick={(event) => {
          console.log("Hola");
          console.log(event);
        }}
      >
        Create
      </button>
    </div>
  );
};

export { CreateTodoButton };
