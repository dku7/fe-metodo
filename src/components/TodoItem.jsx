const TodoItem = ({ todo, onDoItem, onDeleteItem }) => (
  <li>
    {todo.todo}
    <button onClick={() => onDoItem(todo.id)}>Done</button>
    <button onClick={() => onDeleteItem(todo.id)}>Delete</button>
  </li>
);

export default TodoItem;
