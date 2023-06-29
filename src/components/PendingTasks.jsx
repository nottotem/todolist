function PendingTasks({ todos }) {
  const pendingTasksCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="flex flex-row justify-center items-center w-1/3 h-12 gap-2">
      <p className="font-mono text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600 font-semibold select-none">
        {pendingTasksCount}
      </p>
      <p className="font-mono text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-300 font-semibold select-none">
        {pendingTasksCount === 1 ? "task" : "tasks"} pending
      </p>
    </div>
  );
}

export default PendingTasks;
