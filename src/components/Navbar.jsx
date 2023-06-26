import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
// import { RiUserSmileFill } from "react-icons/ri";

function Navbar() {
  return (
    <div className="fixed flex flex-row items-center justify-end w-full h-20 border-b border-neutral-900 gap-4 px-16 bg-neutral-950">
      <div className="flex flex-row items-center h-full w-full gap-2">
        {/* <p className="font-mono text-xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600 font-semibold select-none">
          nottotem, inc.
        </p> */}
        <p className="font-mono text-xl text-neutral-500 font-semibold select-none">
          nottotem, inc.
        </p>
      </div>
      <a
        href="https://www.linkedin.com/in/francisco-toti-1b1354241/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center justify-center h-full">
          <AiFillLinkedin className="text-2xl text-neutral-500 hover:text-neutral-400" />
        </div>
      </a>
      <a
        href="https://github.com/nottotem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center justify-center h-full">
          <AiFillGithub className="text-2xl text-neutral-500 hover:text-neutral-400" />
        </div>
      </a>
      <a
        href="mailto:totemstu@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center justify-center h-full">
          <AiFillMail className="text-2xl text-neutral-500 hover:text-neutral-400" />
        </div>
      </a>
    </div>
  );
}

export default Navbar;
