import React, { useRef } from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="h-11 w-96 mx-auto rounded-lg overflow-hidden pl-2 bg-[#0d231c] mt-3 flex flex-row text-sm"
      onSubmit={(e: React.FormEvent) => {
        handleAddTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        className="w-3/4 h-full text-white bg-transparent border-none outline-none placeholder:text-gray-400"
        type="text"
        placeholder="Add task..."
        ref={inputRef}
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
