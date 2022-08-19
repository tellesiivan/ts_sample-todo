import { FiEdit2, FiCheck, FiTrash } from "react-icons/fi";
import { Task } from "../model";

type TaskProps = {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
};

const TaskItem = ({
  task,
  tasks,
  setTasks,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) => {
  return (
    <form
      className="p-2 w-full h-12 my-1 border-b border-[#091914] list-none flex items-center  text-gray-400 justify-between text-xs"
      key={task.id}
    >
      <p className={`${task.completed && "line-through"}`}>{task.task}</p>
      <div className="flex space-x-2 items-center">
        <div className="hover:text-green-500">
          <FiEdit2 />
        </div>

        <div
          className="hover:text-green-500"
          onClick={() => handleDeleteTask(task.id)}
        >
          <FiTrash />
        </div>
        <div
          className={`hover:text-green-500 ${
            task.completed && "text-green-500"
          }`}
          onClick={() => handleCompleteTask(task.id)}
        >
          <FiCheck size="1.5em" />
        </div>
      </div>
    </form>
  );
};

export default TaskItem;
