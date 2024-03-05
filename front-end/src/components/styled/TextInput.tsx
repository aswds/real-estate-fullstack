// TextInput.tsx
import React, { ChangeEvent } from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-lg font-bold mb">
        {label}
      </label>
      <input
        className="shadow  rounded w-full py-4 px-5 text-black leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
