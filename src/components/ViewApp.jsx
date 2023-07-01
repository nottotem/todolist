import Navbar from "./components/Navbar";
import ToDoHome from "./components/ToDoHome";

function ViewApp() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-neutral-950">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4 pb-16">
        <ToDoHome />
      </div>
    </div>
  );
}

export default ViewApp;
