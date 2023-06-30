import React from "react";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { TodosError } from "../components/TodosError/TodosError";
import { Modal } from "../TodoContext/TodoModal";
import { TodoContext } from "../TodoContext/TodoContext";
import { CreateTodoForm } from "../components/CreateTodoForm/CreateTodoForm";

const AppUi = () => {
  const {
    loading,
    error,
    removeTodo,
    completeTodo,
    searchedTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {searchedTodo.map((todo) => {
          return (
            <TodoItem
              key={todo.key}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.key)}
              remove={() => removeTodo(todo.key)}
            />
          );
        })}
      </TodoList>
      {openModal && (
        <Modal>
          <CreateTodoForm />
        </Modal>
      )}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export { AppUi };
