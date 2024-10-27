import { useState } from "react";

const App = () => {
  return (
    <>
      <h1>Metodo</h1>
      <TodoList />
    </>
  );
};

const TodoList = () => {
  const todoList = ["display todo items", "create a new todo item"];

  return (
    <>
      <ul>
        {todoList.map((todo, index) => (
          <li key={`${todo}-${index}`}>{todo}</li>
        ))}
      </ul>
    </>
  );
};
export default App;
