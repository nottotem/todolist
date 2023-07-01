import Navbar from "./components/Navbar";
// import ToDoApp from "./components/ToDoApp";
import ToDoHome from "./components/ToDoHome";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-neutral-950">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 w-full h-screen gap-4 pb-16">
        <ToDoHome />
        {/* <ToDoApp /> */}
      </div>
    </div>
  );
}

export default App;
