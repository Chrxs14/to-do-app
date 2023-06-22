import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ total, completed }) => {
  return (
    <>
      <div className="header">
        <div className="textHeader">
          <p>Hola!</p>
          <h3>
            Has competado {completed} de {total}
          </h3>
        </div>
      </div>
    </>
  );
};

export { TodoCounter };
