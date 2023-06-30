import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../TodoContext/TodoContext";

const TodoCounter = () => {
  const { todos, loading, completedTodos } = React.useContext(TodoContext);
  return (
    <div className="header">
      <div className="textHeader">
        {loading && <h3>Cargando tus tareas...</h3>}
        {todos.length === 0 && (
          <h3 className="congrats">Crea tu primer tarea!</h3>
        )}
        {todos.length !== 0 && completedTodos === todos.length && (
          <>
            <h3 className="congrats">Felicidades!</h3>
            <h3 className="congrats">Has competado todas tus tareas </h3>
          </>
        )}
        {!(completedTodos === todos.length) && (
          <h3>
            Has competado {completedTodos} de {todos.length}
          </h3>
        )}
      </div>
    </div>
  );
};

export { TodoCounter };
