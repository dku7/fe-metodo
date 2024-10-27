import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todoList, onDoItem }) => {
  return (
    <>
      <ul>
        {todoList.map((todo, index) => (
          <TodoItem
            key={`${todo}-${index}`}
            todo={todo}
            id={`${todo}-${index}`}
            onDoItem={onDoItem}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
