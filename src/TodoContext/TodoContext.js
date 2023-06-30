import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const searchedTodo = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      key: newTodos.length + 1,
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

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
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        removeTodo,
        completeTodo,
        searchedTodo,
        todos,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
function TodoConsumer() {
  return <TodoContext.Consumer></TodoContext.Consumer>;
}

export { TodoContext, TodoProvider, TodoConsumer };
