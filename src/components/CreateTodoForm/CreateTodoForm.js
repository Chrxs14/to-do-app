import React from "react";
import "./CreateTodoForm.css";

const CreateTodoForm = () => {
  return (
    <div className="bg-CreateTodo">
      <div className="form-container">
        <h3>Crea tu tarea</h3>
        <textarea className="inputCreate" placeholder="Describe tu tarea" />
        <button className="createTodoButton">Crear tarea</button>
      </div>
    </div>
  );
};

export { CreateTodoForm };
