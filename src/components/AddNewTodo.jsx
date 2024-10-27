const AddNewTodo = ({
  newTodoTitle,
  newTodoNotes,
  onNewTodoTitleChange,
  onNewTodoNotesChange,
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
        <label htmlFor="todo-notes">Notes</label>
        <textarea
          name="todo-notes"
          id="todo-notes"
          value={newTodoNotes}
          onChange={onNewTodoNotesChange}></textarea>
        <button type="submit" disabled={!newTodoTitle}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddNewTodo;
