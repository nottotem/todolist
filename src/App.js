import Navbar from "./components/Navbar";
import ToDoApp from "./components/ToDoApp";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-neutral-950 pb-10">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 w-full gap-4">
        <ToDoApp />
      </div>
    </div>
  );
}

export default App;
