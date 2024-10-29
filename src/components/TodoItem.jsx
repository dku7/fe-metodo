import { useState } from "react";

const TodoItem = ({ todo, onDoItem, onDeleteItem }) => {
  const [isNotesVisible, setIsNotesVisible] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        name={todo.title}
        id={todo.id}
        value={todo.title}
        onClick={() => onDoItem(todo.id)}
        checked={todo.complete ? "checked" : ""}
      />
      <label
        className="mx-5 hover:underline hover:cursor-pointer"
        onClick={() => setIsNotesVisible(!isNotesVisible)}>
        {todo.title}
      </label>
      <button
        className="hover:underline hover:cursor-pointer"
        onClick={() => onDeleteItem(todo.id)}>
        Delete
      </button>
      <div className="text-sm ml-8 pt-4">
        {isNotesVisible && (
          <>
            <p>
              <strong>Notes</strong>: {todo.notes}
            </p>
            <p>
              <strong>Due date</strong>: {todo.due_date}
            </p>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
