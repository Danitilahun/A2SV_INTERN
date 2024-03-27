import React from "react";
import { FcGoogle } from "react-icons/fc";
import InputField from "./(component)/InputField";
import { fields } from "./(constants)/formFields";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center text-[14px]">
      <div className="h-screen flex justify-center flex-col gap-3 items-center w-[50%]">
        <div className="text-4xl leading-9 text-center font-extrabold w-[50%]">
          Sign Up Today!
        </div>
        <button className="w-[50%] h-auto rounded-lg border border-gray-300 px-4 py-3 mx-4 my-2 flex items-center justify-center gap-2">
          <FcGoogle size={25} />
          <span className="font-[700]">Sign Up with Google</span>
        </button>

        <div className="relative flex flex-col items-center w-[50%]">
          <div className="flex justify-center items-center w-full">
            {/* Increased the border thickness for better visibility */}
            <div className="flex-grow border-t-2 border-gray-300"></div>
            <span className="px-4 text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
              Or Sign Up with Email
            </span>
            <div className="flex-grow border-t-2 border-gray-300"></div>
          </div>
        </div>

        {fields.map((fields, index) => (
          <InputField
            key={index}
            label={fields.label}
            placeholder={fields.placeholder}
          />
        ))}

        <button className="w-[50%] h-auto rounded-[80px] border text-white bg-primary-500 border-gray-300 px-4 py-3 mx-4 my-2 flex items-center justify-center gap-2">
          Continue
        </button>

        <div className="flex gap-3 w-[50%]">
          <span className="text-gray-700">Already have an account?</span>
          <Link href="/signin" className="text-primary-500 font-semibold">
            Login
          </Link>
        </div>

        <div className="w-[50%]">
          <span className="text-gray-700">
            By clicking {"Continue"}, you acknowledge that you have read and
            accepted our{" "}
          </span>
          <Link href="/" className="text-primary-500 font-semibold">
            Terms of Service
          </Link>
          <span className="text-gray-700"> and</span>
          <Link href="/" className="text-primary-500 font-semibold">
            {" "}
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
