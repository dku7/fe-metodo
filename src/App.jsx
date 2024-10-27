import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    "display todo items",
    "make todo items stateful",
    "create a new todo item",
  ]);
  const [newTask, setNewTask] = useState("");

  const handNewTaskChange = (event) => setNewTask(event.target.value);

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    if (!newTask) return;

    setTodoList([newTask, ...todoList]);
  };

  return (
    <>
      <h1>Metodo</h1>
      <AddNewTask
        newTask={newTask}
        onNewTaskChange={handNewTaskChange}
        onNewTaskSubmit={handleNewTaskSubmit}
      />
      <TodoList todoList={todoList} />
    </>
  );
};

const AddNewTask = ({ newTask, onNewTaskChange, onNewTaskSubmit }) => {
  return (
    <>
      <form onSubmit={onNewTaskSubmit}>
        <label htmlFor="newtask">New task:</label>
        <input
          type="text"
          name="newtask"
          id="newtask"
          value={newTask}
          onChange={onNewTaskChange}
        />
        <button type="submit" disabled={!newTask}>
          Add
        </button>
      </form>
    </>
  );
};

const TodoList = ({ todoList }) => {
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
