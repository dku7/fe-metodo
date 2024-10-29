const AddNewTodo = (props) => {
  const {
    newTodoTitle,
    newTodoNotes,
    newTodoDueDate,
    onNewTodoTitleChange,
    onNewTodoNotesChange,
    onNewTodoDueDateChange,
    onNewTodoSubmit,
  } = props;

  return (
    <div className="w-2/3 mb-10 mt-10">
      <form onSubmit={onNewTodoSubmit}>
        <fieldset className="border border-solid border-gray-400 rounded p-3">
          <legend>Create new todo item</legend>
          <label htmlFor="todo-title" className="block">
            New item:
          </label>
          <input
            className="border border-solid border-gray-400 rounded block w-96 mb-3"
            type="text"
            name="todo-title"
            id="todo-title"
            value={newTodoTitle}
            onChange={onNewTodoTitleChange}
            required
          />
          <label htmlFor="todo-notes">Notes:</label>
          <textarea
            className="border border-solid border-gray-400 rounded block mb-3 w-96 h-24"
            name="todo-notes"
            id="todo-notes"
            value={newTodoNotes}
            onChange={onNewTodoNotesChange}></textarea>
          <label htmlFor="todo-due-date">Due date:</label>
          <input
            type="date"
            name="todo-due-date"
            id="todo-due-date"
            value={newTodoDueDate}
            onChange={onNewTodoDueDateChange}
            className="border border-solid border-gray-400 rounded block mb-3"
          />
          <button
            type="submit"
            disabled={!newTodoTitle}
            className={
              newTodoTitle
                ? "border border-solid border-blue-700 rounded px-4 bg-blue-700 text-white"
                : "border border-solid border-gray-400 rounded px-4 bg-gray-400 text-white"
            }>
            Add
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddNewTodo;
