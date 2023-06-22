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
          className="flex flex-row w-full h-12 rounded-md border border-neutral-600 hover:border-neutral-400 pl-4 mb-2 bg-transparent hover:bg-neutral-900 font-mono"
        >
          <input
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
            className={`w-3/4 font-medium bg-transparent outline-none ${
              todo.completed
                ? "text-neutral-600 line-through"
                : "text-slate-300"
            }`}
          />
          <div className="flex items-center justify-center w-1/4 gap-4">
            <button
              title="Complete Task"
              onClick={() => handleComplete(todo)}
              className={`${
                todo.completed ? "text-cyan-600" : "text-slate-300"
              }`}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              title="Edit Task"
              onClick={() => handleEdit(todo)}
              className="text-slate-300"
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              title="Delete Task"
              onClick={() => handleDelete(todo)}
              className="text-slate-300"
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
