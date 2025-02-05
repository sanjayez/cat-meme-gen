import React from 'react';

interface InputFormProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({ inputValue, onInputChange, onSubmit }) => {
  return (
    <form className="flex flex-col justify-center items-center" onSubmit={onSubmit}>
      <textarea
        placeholder="Describe how you want your cat to look..."
        value={inputValue}
        onChange={onInputChange}
        className="border border-gray-300 bg-white rounded px-4 py-2 w-full max-w-md placeholder:text-black h-20 md:h-24 focus:outline-none focus:ring-0 resize-none"
      />
      <button
        type="submit"
        className="mt-4 bg-lime-600 text-white rounded px-4 py-2 w-full max-w-md cursor-pointer text-sm md:text-base"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm; 