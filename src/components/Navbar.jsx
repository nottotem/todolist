import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-end w-full h-14 border-b border-neutral-900 gap-2 pr-4">
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
          {/* <p className="font-mono text-sm text-neutral-500 select-none">
            Contact me
          </p> */}
          <AiFillMail className="text-2xl text-neutral-500 hover:text-neutral-400" />
        </div>
      </a>
    </div>
  );
}

export default Navbar;
