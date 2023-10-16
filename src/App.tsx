import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AddButton from "./components/AddButton";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen -z-10">
      <AddButton setOpen={setOpen} open={open} />
      {open ? <TaskForm setOpen={setOpen} /> : null}
      <TaskList />
    </div>
  );
}

export default App;
