import { useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(task.task);

  const { id, task: taskText, completed } = task;

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedText) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, task: editedText } : task
        )
      );
      setEdit(false);
    }
  };

  return (
    <form
      className="p-2 w-full h-12 my-1 border-b border-[#091914] list-none flex items-center  text-gray-400 justify-between text-xs"
      key={id}
      onSubmit={handleEdit}
    >
      {edit ? (
        <div className="flex flex-row items-center justify-between w-3/4 h-full border-b border-gray-700">
          <input
            ref={inputRef}
            type="text"
            placeholder="Edit task..."
            value={editedText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditedText(e.target.value)
            }
            className="w-full h-full text-white bg-transparent outline-none placeholder:text-gray-400"
          />
          <button
            className="flex items-center justify-center rounded-full p-1 bg-[#193a2e]"
            type="submit"
          >
            <FiCheck size="1.3em" />
          </button>
        </div>
      ) : (
        <p className={`${task.completed && "line-through"}`}>{taskText}</p>
      )}
      <div className="flex items-center space-x-2">
        <div
          className="hover:text-green-500"
          onClick={() => {
            inputRef.current?.focus();
            setEdit((prev) => !prev);

            if (editedText.trim().length > 0) {
              setEditedText(taskText);
            }
          }}
        >
          <FiEdit2 />
        </div>

        <div
          className="hover:text-green-500"
          onClick={() => handleDeleteTask(id)}
        >
          <FiTrash />
        </div>
        <div
          className={`hover:text-green-500 ${completed && "text-green-500"}`}
          onClick={() => {
            handleCompleteTask(id);
            setEdit(false);
          }}
        >
          <FiCheck size="1.5em" />
        </div>
      </div>
    </form>
  );
};

export default TaskItem;
