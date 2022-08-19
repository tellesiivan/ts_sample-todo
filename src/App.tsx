import React, { useState } from "react";
import { Task } from "./model";
import "./App.css";
import InputField from "./components/InputField";
import TasksList from "./components/TasksList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks((prev) => [{ id: Date.now(), task, completed: false }, ...prev]);
      setTask("");
    }
  };

  return (
    <div className="h-screen w-screen bg-[#06120e] p-2 flex flex-col items-center">
      <h2 className="text-2xl text-white text-center mt-4 font-semibold">
        Quikfy
      </h2>
      <InputField
        value={task}
        setInputValue={setTask}
        handleAddTask={handleAddTask}
      />
      {tasks.length > 0 && <TasksList tasks={tasks} setTasks={setTasks} />}
    </div>
  );
};

export default App;
