const AddNewTodo = ({
  newTodoTitle,
  newTodoDescription,
  onNewTodoTitleChange,
  onNewTodoDescriptionChange,
  onNewTodoSubmit,
}) => {
  return (
    <>
      <form onSubmit={onNewTodoSubmit}>
        <label htmlFor="todo-title">New item:</label>
        <input
          type="text"
          name="todo-title"
          id="todo-title"
          value={newTodoTitle}
          onChange={onNewTodoTitleChange}
          required
        />
        <label htmlFor="todo-description">Description</label>
        <textarea
          name="todo-description"
          id="todo-description"
          value={newTodoDescription}
          onChange={onNewTodoDescriptionChange}></textarea>
        <button type="submit" disabled={!newTodoTitle}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddNewTodo;
