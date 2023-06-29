import React from "react";
import "./App.css";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext/TodoContext";

/*
// const defaultTodos = [
//   {
//     key: 1,
//     text: "Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla",
//     completed: true,
//   },
//   {
//     key: 2,
//     text: "Cortar tomate Cortar tomate Cortar tomate Cortar tomate Cortar tomate",
//     completed: true,
//   },
//   { key: 3, text: "Cortar cebolla 2", completed: false },
//   { key: "cortarCebolla3", text: "Cortar cebolla 3", completed: false },
//   {
//     key: 4,
//     text: "Cortar tomate Cortar tomate Cortar tomate Cortar tomate Cortar tomate",
//     completed: true,
//   },
// ];
*/

const App = () => {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
};

export { App };
