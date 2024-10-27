const TodoItem = ({ todo, onDoItem }) => (
  <li>
    {todo.todo}
    <button
      onClick={() => {
        onDoItem(todo.id);
      }}>
      Done
    </button>
  </li>
);

export default TodoItem;
