import React from "react";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";

const AppUi = ({
  completedTodos,
  removeTodo,
  completeTodo,
  searchedTodo,
  todos,
  searchValue,
  setSearchValue,
}) => {
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

export { AppUi };
