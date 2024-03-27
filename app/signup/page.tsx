import React from "react";
import { FcGoogle } from "react-icons/fc";
import InputField from "./(component)/InputField";
import { fields } from "./(constants)/formFields";
import Link from "next/link";
import HorizontalLineWithText from "./(component)/HorizontalLineWithText";
import TermsAndPrivacyText from "./(component)/TermsAndPrivacyText";

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

        <HorizontalLineWithText text="Or Sign Up with Email" />

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

        <div className="flex gap-1 w-[50%]">
          <span className="text-gray-700">Already have an account?</span>
          <Link href="/signin" className="text-primary-500 font-semibold">
            Login
          </Link>
        </div>

        <TermsAndPrivacyText text="By clicking 'Continue', you acknowledge that you have read and accepted our" />
      </div>
    </div>
  );
};

export default SignUp;
