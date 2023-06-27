import React from "react";
import "./App.css";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { useLocalStorage } from "./useLocalStorage";

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
    <>
      <TodoCounter completed={completedTodos} total={todos.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
      <CreateTodoButton />
    </>
  );
};

export { App };
