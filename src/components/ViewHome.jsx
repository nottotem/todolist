import Navbar from "./components/Navbar";
import ToDoApp from "./components/ToDoApp";

function ViewHome() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-neutral-950">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 w-full h-screen gap-4 pb-16">
        <ToDoApp />
      </div>
    </div>
  );
}

export default ViewHome;
