import { useState } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ heading, todoList, onDoItem, isVisible }) => {
  const [showList, setShowList] = useState(isVisible);

  const handleShowList = () => setShowList(!showList);

  return (
    <>
      <section>
        <header>
          <h2>
            {heading} <button onClick={handleShowList}>Toggle</button>
          </h2>
        </header>
        {showList && (
          <ul>
            {todoList.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onDoItem={onDoItem} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default TodoList;
