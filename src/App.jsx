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
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const handNewTodoTitleChange = (event) => setNewTodoTitle(event.target.value);
  const handleNewTodoDescriptionChange = (event) =>
    setNewTodoDescription(event.target.value);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (!newTodoTitle) return;

    const todo = {
      title: newTodoTitle,
      description: newTodoDescription,
      id: Date.now(),
      complete: false,
    };

    setTodoList([todo, ...todoList]);
    setNewTodoTitle("");
    setNewTodoDescription("");
  };

  const handleMarkTodoDone = (id) => {
    const newTodoList = [...todoList];

    const todo = newTodoList.find((todo) => todo.id === id);
    todo.complete = !todo.complete;

    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList([...newTodoList]);
  };

  return (
    <>
      <Heading title={"metodo"} />
      <AddNewTodo
        newTodoTitle={newTodoTitle}
        newTodoDescription={newTodoDescription}
        onNewTodoTitleChange={handNewTodoTitleChange}
        onNewTodoDescriptionChange={handleNewTodoDescriptionChange}
        onNewTodoSubmit={handleNewTodoSubmit}
      />
      <TodoList
        heading={"Open items"}
        todoList={todoList.filter((todo) => !todo.complete)}
        onDoItem={handleMarkTodoDone}
        onDeleteItem={handleDeleteTodo}
        isVisible={true}
      />

      <hr />

      <TodoList
        heading={"Completed items"}
        todoList={todoList.filter((todo) => todo.complete)}
        onDoItem={handleMarkTodoDone}
        onDeleteItem={handleDeleteTodo}
        isVisible={false}
      />
    </>
  );
};

export default App;
