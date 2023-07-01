import ClearAllDoneButton from "./ClearAllDoneButton";
import ClearAllTaskButton from "./ClearAllTaskButton";

import { HiChevronDoubleRight } from "react-icons/hi";

function TasksText({ todos, setTodos }) {
  console.log(todos);
  return (
    <div className="flex flex-row justify-center items-center w-full h-12">
      <div className="flex flex-col justify-center w-1/2 h-full">
        <div className="flex flex-row gap-2 items-center">
          <HiChevronDoubleRight className="text-slate-300" />
          <p className="font-mono text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-300 font-semibold select-none">
            Pending tasks
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <HiChevronDoubleRight className="text-cyan-600" />
          <p className="font-mono text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600 font-semibold select-none">
            Complete tasks
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end w-1/2 h-full gap-2">
        <div className="flex items-center justify-center h-full w-2/5">
          <ClearAllDoneButton todos={todos} setTodos={setTodos} />
        </div>
        <div className="flex items-center justify-center h-full w-2/5">
          <ClearAllTaskButton todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default TasksText;
