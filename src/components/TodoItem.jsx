import { useState } from "react";

const TodoItem = ({ todo, onDoItem, onDeleteItem }) => {
  const [isNotesVisible, setIsNotesVisible] = useState(false);

  return (
    <li>
      <a
        className="TodoItem__link"
        onClick={() => setIsNotesVisible(!isNotesVisible)}>
        {todo.title}
      </a>
      <button onClick={() => onDoItem(todo.id)}>Done</button>
      <button onClick={() => onDeleteItem(todo.id)}>Delete</button>
      {isNotesVisible && <p>{todo.notes}</p>}
    </li>
  );
};

export default TodoItem;
