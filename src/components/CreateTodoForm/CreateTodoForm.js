import React from "react";
import "./CreateTodoForm.css";
import { TodoContext } from "../../TodoContext/TodoContext";

const CreateTodoForm = () => {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  return (
    <div className="bg-CreateTodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(newTodoValue);
          setOpenModal(false);
        }}
        className="form-container"
      >
        <h3>Crea tu tarea</h3>
        <textarea
          value={newTodoValue}
          onChange={(event) => {
            setNewTodoValue(event.target.value);
          }}
          className="inputCreate"
          placeholder="Describe tu tarea"
          required
        />
        <button type="submit" className="createTodoButton">
          Crear tarea
        </button>
      </form>
    </div>
  );
};

export { CreateTodoForm };
