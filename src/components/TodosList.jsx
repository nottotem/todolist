function TodosList({ todos, setTodos, setEditTodo }) {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-1/3">
      {todos.map((todo) => (
        <span
          key={todo.id}
          className="flex flex-row w-full h-14 border-b  border-neutral-600 pl-4 bg-transparent hover:bg-neutral-900 font-mono"
        >
          <input
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
            className={`w-3/4 font-semibold bg-transparent outline-none ${
              todo.completed
                ? "text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600"
                : "text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-300"
            }`}
          />
          <div className="flex items-center justify-center w-1/4 gap-4">
            <button
              title="Complete"
              onClick={() => handleComplete(todo)}
              className={`${
                todo.completed ? "text-cyan-600" : "text-neutral-400"
              }`}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              title="Edit"
              onClick={() => handleEdit(todo)}
              className="text-neutral-400"
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              title="Delete"
              onClick={() => handleDelete(todo)}
              className="text-neutral-400"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </span>
      ))}
    </div>
  );
}

export default TodosList;
