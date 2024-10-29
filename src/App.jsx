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
  const [newTodoNotes, setNewTodoNotes] = useState("");
  const [newTodoDueDate, setNewTodoDueDate] = useState(null);

  const handNewTodoTitleChange = (event) => setNewTodoTitle(event.target.value);
  const handleNewTodoNotesChange = (event) =>
    setNewTodoNotes(event.target.value);
  const handleNewTodoDueDateChange = (event) =>
    setNewTodoDueDate(event.target.value);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (!newTodoTitle) return;

    const todo = {
      title: newTodoTitle,
      notes: newTodoNotes,
      id: Date.now(),
      due_date: newTodoDueDate,
      complete: false,
    };

    setTodoList([todo, ...todoList]);
    setNewTodoTitle("");
    setNewTodoNotes("");
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
    <div className="mx-10">
      <Heading title={"metodo"} />
      <AddNewTodo
        newTodoTitle={newTodoTitle}
        newTodoNotes={newTodoNotes}
        newTodoDueDate={newTodoDueDate}
        onNewTodoTitleChange={handNewTodoTitleChange}
        onNewTodoNotesChange={handleNewTodoNotesChange}
        onNewTodoDueDateChange={handleNewTodoDueDateChange}
        onNewTodoSubmit={handleNewTodoSubmit}
      />
      <TodoList
        heading={"Open items"}
        todoList={todoList.filter((todo) => !todo.complete)}
        onDoItem={handleMarkTodoDone}
        onDeleteItem={handleDeleteTodo}
        isVisible={true}
      />

      <hr className="my-5" />

      <TodoList
        heading={"Completed items"}
        todoList={todoList.filter((todo) => todo.complete)}
        onDoItem={handleMarkTodoDone}
        onDeleteItem={handleDeleteTodo}
        isVisible={false}
      />
    </div>
  );
};

export default App;
