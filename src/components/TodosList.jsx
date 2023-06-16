function TodosList({ todos, setTodos, setEditTodo }) {
  //Función para marcar una tarea como completada

  // const handleComplete = (todo) => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         return { ...item, completed: !item.completed };
  //       }
  //       return item;
  //     })
  //   );
  // };

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
          className="flex flex-row w-full h-12 rounded-md border border-neutral-400 pl-4 mb-2 bg-transparent hover:bg-neutral-800 font-mono"
          // className="flex flex-row w-full h-12 rounded-md border border-neutral-600 pl-4 mb-2 bg-gradient-to-b from-neutral-600 to-neutral-700 shadow shadow-neutral-800 font-mono"
        >
          <input
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
            className="w-3/4 text-slate-300 font-medium bg-transparent outline-none"
          />
          <div className="flex items-center justify-center w-1/4 gap-4">
            {/* Botón para marcar una tarea como completada */}

            {/* <button
              onClick={() => handleComplete(todo)}
              className="text-green-500"
            >
              <i className="fa fa-check-circle"></i>
            </button> */}
            <button
              onClick={() => handleEdit(todo)}
              className="text-yellow-200"
            >
              <i className="fa fa-edit"></i>
            </button>
            <button onClick={() => handleDelete(todo)} className="text-red-400">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </span>
      ))}
    </div>
  );
}

export default TodosList;
