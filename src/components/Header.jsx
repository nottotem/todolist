function Header() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-36">
      <h1 className="font-mono text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-400 select-none ">
        To Do List
      </h1>
      <h3 className="font-mono text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-400 select-none ">
        Add all your tasks and don't forget anything!
      </h3>
    </div>
  );
}

export default Header;
