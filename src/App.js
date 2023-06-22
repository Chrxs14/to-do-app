import React from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";

const defaultTodos = [
  {
    text: "Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla",
    completed: true,
  },
  {
    text: "Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla",
    completed: true,
  },
  { text: "Cortar cebolla 2", completed: false },
  { text: "Cortar cebolla 3", completed: false },
];

const App = () => {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};

export { App };
