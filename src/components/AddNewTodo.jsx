const AddNewTodo = ({ newTodo, onNewTodoChange, onNewTodoSubmit }) => {
  return (
    <>
      <form onSubmit={onNewTodoSubmit}>
        <label htmlFor="newtodo">New item:</label>
        <input
          type="text"
          name="newtodo"
          id="newtodo"
          value={newTodo}
          onChange={onNewTodoChange}
        />
        <button type="submit" disabled={!newTodo}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddNewTodo;
