import React from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
const defaultTodos = [
  {
    key: 1,
    text: "Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla Cortar cebolla",
    completed: true,
  },
  {
    key: 2,
    text: "Cortar tomate Cortar tomate Cortar tomate Cortar tomate Cortar tomate",
    completed: true,
  },
  { key: 3, text: "Cortar cebolla 2", completed: false },
  { key: "cortarCebolla3", text: "Cortar cebolla 3", completed: false },
  {
    key: 4,
    text: "Cortar tomate Cortar tomate Cortar tomate Cortar tomate Cortar tomate",
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const searchedTodo = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleToggleCompleted = (updateTodo) => {
    const updateTodos = todos.map((todo) => {
      if (todo.key === updateTodo.key) {
        return updateTodo;
      }
      return todo;
    });
    setTodos(updateTodos);
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
              todo={todo}
              key={todo.key}
              text={todo.text}
              completed={todo.completed}
              onToggleCompleted={handleToggleCompleted}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};

export { App };
