import React from "react";
import "./App.css";
import { useLocalStorage } from "./useLocalStorage";
import { AppUi } from "./AppUi";

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
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const searchedTodo = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.key === key);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const removeTodo = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.key === key);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;
  return (
    <AppUi
      completedTodos={completedTodos}
      removeTodo={removeTodo}
      completeTodo={completeTodo}
      searchedTodo={searchedTodo}
      todos={todos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
};

export { App };
