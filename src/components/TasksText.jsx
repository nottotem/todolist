// import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HiChevronDoubleRight } from "react-icons/hi";

function TasksText() {
  return (
    <div className="flex flex-col justify-center w-1/3">
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
  );
}

export default TasksText;
