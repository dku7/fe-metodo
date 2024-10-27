import { useState, useEffect } from "react";
import AddNewTodo from "./components/AddNewTodo.jsx";
import TodoList from "./components/TodoList.jsx";

const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
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

    setTodoList([newTodo, ...todoList]);
    setNewTodo("");
  };

  const handleMarkTodoDone = (todo) => {
    const newTodoList = todoList.filter(
      (item, index) => `${item}-${index}` !== todo.id
    );

    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Metodo</h1>
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
