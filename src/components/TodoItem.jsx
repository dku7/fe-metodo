const TodoItem = ({ todo, id, onDoItem }) => (
  <li>
    {todo}
    <button
      onClick={() => {
        onDoItem({ id });
      }}>
      Done
    </button>
  </li>
);

export default TodoItem;
