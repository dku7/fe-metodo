const AddNewTodo = ({
  newTodoTitle,
  newTodoNotes,
  onNewTodoTitleChange,
  onNewTodoNotesChange,
  onNewTodoSubmit,
}) => {
  return (
    <div className="AddNewTodo">
      <form onSubmit={onNewTodoSubmit}>
        <fieldset className="AddNewTodo__fieldset">
          <legend>Create new todo item</legend>
          <label htmlFor="todo-title">New item:</label>
          <input
            className="AddNewTodo__title"
            type="text"
            name="todo-title"
            id="todo-title"
            value={newTodoTitle}
            onChange={onNewTodoTitleChange}
            required
          />
          <label htmlFor="todo-notes">Notes:</label>
          <textarea
            className="AddNewTodo__notes"
            name="todo-notes"
            id="todo-notes"
            value={newTodoNotes}
            onChange={onNewTodoNotesChange}></textarea>
          <button type="submit" disabled={!newTodoTitle}>
            Add
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddNewTodo;
