import { useState, useEffect } from "react";
import Heading from "./components/Heading.jsx";
import AddNewTodo from "./components/AddNewTodo.jsx";
import TodoList from "./components/TodoList.jsx";

const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  const [todoList, setTodoList] = useStorageState("todolist", []);
  const [newTodo, setNewTodo] = useState("");

  const handNewTodoChange = (event) => setNewTodo(event.target.value);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (!newTodo) return;

    const todo = { todo: newTodo, id: Date.now(), complete: false };

    setTodoList([todo, ...todoList]);
    setNewTodo("");
  };

  const handleMarkTodoDone = (id) => {
    const newTodoList = [...todoList];

    const todo = newTodoList.find((todo) => todo.id === id);
    todo.complete = true;

    setTodoList(newTodoList);
  };

  return (
    <>
      <Heading title={"metodo"} />
      <AddNewTodo
        newTodo={newTodo}
        onNewTodoChange={handNewTodoChange}
        onNewTodoSubmit={handleNewTodoSubmit}
      />
      <TodoList todoList={todoList} onDoItem={handleMarkTodoDone} />
    </>
  );
};

export default App;
