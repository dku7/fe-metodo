import { useState } from "react";

const TodoItem = ({ todo, onDoItem, onDeleteItem }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <li>
      {todo.title}

      <button onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}>
        Details
      </button>
      <button onClick={() => onDoItem(todo.id)}>Done</button>
      <button onClick={() => onDeleteItem(todo.id)}>Delete</button>
      {isDescriptionVisible && <p>{todo.description}</p>}
    </li>
  );
};

export default TodoItem;
