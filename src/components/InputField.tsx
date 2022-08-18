import React from "react";

type InputFieldProps = {
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
};

const InputField = ({
  value,
  setInputValue,
  handleAddTask,
}: InputFieldProps) => {
  return (
    <form
      className="h-11 w-96 mx-auto rounded-lg overflow-hidden pl-2 bg-[#0d231c] mt-3 flex flex-row text-xs"
      onSubmit={handleAddTask}
    >
      <input
        className="h-full bg-transparent w-3/4 outline-none border-none placeholder:text-gray-400 text-white"
        type="text"
        placeholder="Add task..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      <button
        className="flex-1 text-center hover:opacity-80 text-gray-300 m-1 bg-[#091813] rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
