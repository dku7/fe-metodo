import { useState } from "react";

const TodoItem = ({ todo, onDoItem, onDeleteItem }) => {
  const [isNotesVisible, setIsNotesVisible] = useState(false);

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        name={todo.title}
        id={todo.id}
        value={todo.title}
        onClick={() => onDoItem(todo.id)}
        checked={todo.complete ? "checked" : ""}
      />
      <label
        className="TodoItem__item-title"
        onClick={() => setIsNotesVisible(!isNotesVisible)}>
        {todo.title}
      </label>
      <button onClick={() => onDeleteItem(todo.id)}>Delete</button>
      <p className="TodoItem__notes">{isNotesVisible && todo.notes}</p>
    </li>
  );
};

export default TodoItem;
