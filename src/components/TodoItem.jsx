import { useState } from "react";

const TodoItem = ({ todo, onDoItem, onDeleteItem }) => {
  const [isNotesVisible, setIsNotesVisible] = useState(false);

  return (
    <li>
      {todo.title}

      <button onClick={() => setIsNotesVisible(!isNotesVisible)}>
        Show notes
      </button>
      <button onClick={() => onDoItem(todo.id)}>Done</button>
      <button onClick={() => onDeleteItem(todo.id)}>Delete</button>
      {isNotesVisible && <p>{todo.notes}</p>}
    </li>
  );
};

export default TodoItem;
