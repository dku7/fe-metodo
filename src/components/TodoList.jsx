import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todoList, onDoItem }) => {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDoItem={onDoItem} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
