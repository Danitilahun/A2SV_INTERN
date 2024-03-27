import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password"; // Define type prop
  width?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
  onChange,
  type = "text", // Set default value to "text"
  width = "w-[50%]",
}) => {
  return (
    <div className={width}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type} // Use the type prop
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      />
    </div>
  );
};

export default InputField;
