import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useState,
  Ref,
} from "react";

interface OTPInputProps {
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OTPInput: ForwardRefRenderFunction<HTMLInputElement, OTPInputProps> = (
  { name, value, onChange },
  ref: Ref<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      maxLength={1}
      placeholder={isFocused ? "" : "0"}
      className="w-[20%] h-12 px-2 border-2 border-purple-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400 flex items-center justify-center text-center font-semibold text-lg"
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default forwardRef<HTMLInputElement, OTPInputProps>(OTPInput);
