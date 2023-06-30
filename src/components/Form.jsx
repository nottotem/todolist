import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  // const onInputChange = (event) => {
  //   setInput(event.target.value);
  // };

  const onInputChange = (event) => {
    const capitalizedInput =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setInput(capitalizedInput);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="flex flex-row items-center justify-center w-1/3"
    >
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        required
        onChange={onInputChange}
        className="w-3/4 h-10 rounded-l-3xl pl-4 outline-none text-neutral-900 bg-neutral-300 placeholder-neutral-400"
      />
      <button
        type="submit"
        className="w-1/4 h-10 rounded-r-3xl bg-cyan-600 text-slate-100 font-medium"
      >
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default Form;
