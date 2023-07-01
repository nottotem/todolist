// function PendingTasks({ todos }) {
//   const pendingTasksCount = todos.filter((todo) => !todo.completed).length;

//   return (
//     <div className="flex flex-row justify-center items-center w-1/3 h-10 gap-2">
//       <p className="font-mono text-sm text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400 font-bold select-none">
//         {pendingTasksCount} {pendingTasksCount === 1 ? "task" : "tasks"} pending
//       </p>
//     </div>
//   );
// }

function PendingTasks({ todos }) {
  const pendingTasksCount = todos.filter((todo) => !todo.completed).length;
  const totalTasksCount = todos.length;

  let message;

  if (totalTasksCount === 0) {
    message = "No task to do";
  } else if (pendingTasksCount === 0) {
    message = "All tasks complete";
  } else {
    message = `${pendingTasksCount} ${
      pendingTasksCount === 1 ? "task" : "tasks"
    } pending`;
  }

  return (
    <div className="flex flex-row justify-center items-center w-full h-10 gap-2">
      <p className="font-mono text-sm text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400 font-bold select-none">
        {message}
      </p>
    </div>
  );
}

export default PendingTasks;
