import React, { useState } from "react";
import { Task } from "../model";
import TaskItem from "./TaskItem";

type PropsTask = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TasksList = ({ tasks, setTasks }: PropsTask) => {
  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="mt-2 bg-[#0d231c] w-96 h-[400px] rounded-md py-2 overflow-y-scroll">
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          setTasks={setTasks}
          tasks={tasks}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
