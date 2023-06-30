import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import TasksText from "./TasksText";
import PendingTasks from "./PendingTasks";
import TodosList from "./TodosList";

function ToDoApp() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TasksText todos={todos} setTodos={setTodos} />
      <PendingTasks todos={todos} />
      <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default ToDoApp;
