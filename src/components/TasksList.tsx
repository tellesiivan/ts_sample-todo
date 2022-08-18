import React from "react";
import { Task } from "../model";

type PropsTask = {
  tasks: Task[];
};

const TasksList = ({ tasks }: PropsTask) => {
  console.log(tasks);

  return <div></div>;
};

export default TasksList;
