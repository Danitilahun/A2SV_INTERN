import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  width?: string; // Make width prop optional
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  width = "w-[50%]",
}) => {
  return (
    <div className={width}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      />
    </div>
  );
};

export default InputField;
