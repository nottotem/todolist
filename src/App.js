import Navbar from "./components/Navbar";
import ToDoApp from "./components/ToDoApp";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-neutral-950">
      <Navbar />
      <div className="flex flex-col items-center w-full min-h-screen gap-4 pb-16">
        <ToDoApp />
      </div>
    </div>
  );
}

export default App;
