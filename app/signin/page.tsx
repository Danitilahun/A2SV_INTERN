import React from "react";
import HorizontalLineWithText from "../../components/HorizontalLineWithText";
import InputField from "../../components/InputField";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="text-[14px] flex flex-col gap-4 items-center justify-center absolute top-[141px] left-[1092px] w-[408px] h-[390px] md:w-[calc(100vw - 816px)] md:left-[calc(50% + 408px)] md:transform md:-translate-x-1/2 md:top-[calc(50% - 195px)] lg:w-[calc(100vw - 816px)] lg:left-[calc(50% + 408px)] lg:transform lg:-translate-x-1/2 lg:top-[calc(50% - 195px)] xl:w-[calc(100vw - 816px)] xl:left-[calc(50% + 408px)] xl:transform xl:-translate-x-1/2 xl:top-[calc(50% - 195px)]">
      <div className="text-2xl leading-9 text-center font-extrabold w-[90%]">
        Welcome Back,
      </div>
      <HorizontalLineWithText text="" width="w-[90%]" />

      <InputField
        label="Email"
        placeholder="Enter your email"
        width="w-[90%]"
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        width="w-[90%]"
      />

      <button className="w-[90%] h-auto rounded-[80px] border text-white bg-primary-500 border-gray-300 px-4 py-3 mx-4 my-2 flex items-center justify-center gap-2">
        Login
      </button>

      <div className="flex gap-1 w-[90%]">
        <span className="text-gray-700">Don’t have an account?</span>
        <Link href="/signin" className="text-primary-500 font-semibold">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
