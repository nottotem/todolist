function PendingTasks({ todos }) {
  const pendingTasksCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="flex flex-row justify-center items-center w-1/3 h-10 gap-2">
      <p className="font-mono text-lg text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-300 font-bold select-none">
        {pendingTasksCount}
      </p>
      <p className="font-mono text-md text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-300 font-medium select-none">
        {pendingTasksCount === 1 ? "task" : "tasks"} pending
      </p>
    </div>
  );
}

export default PendingTasks;
