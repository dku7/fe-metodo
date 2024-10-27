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
      <div className="TodoItem__notes">
        {isNotesVisible && (
          <>
            <p>Notes: {todo.notes}</p>
            <p>Due date: {todo.due_date}</p>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
