import { useState } from "react";
import AddNewTodo from "./components/AddNewTodo.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
  const [todoList, setTodoList] = useState([]);
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
