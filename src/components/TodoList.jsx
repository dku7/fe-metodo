import { useState } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ heading, todoList, onDoItem, onDeleteItem, isVisible }) => {
  const [showList, setShowList] = useState(isVisible);

  const handleShowList = () => setShowList(!showList);

  return (
    <>
      <section>
        <header>
          <h2>
            {heading}{" "}
            <button onClick={handleShowList}>
              {showList ? "Hide" : "Show"}
            </button>
          </h2>
        </header>
        <p>{todoList.length} item(s)</p>
        {showList && (
          <ul className="TodoList">
            {todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDoItem={onDoItem}
                onDeleteItem={onDeleteItem}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default TodoList;
