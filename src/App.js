import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import TasksText from "./components/TasksText";
import PendingTasks from "./components/PendingTasks";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-neutral-950 pb-10">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 w-full gap-4">
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
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
