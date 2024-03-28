"use client";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import InputField from "../../components/InputField";
import { fields } from "./(constants)/formFields";
import Link from "next/link";
import HorizontalLineWithText from "../../components/HorizontalLineWithText";
import TermsAndPrivacyText from "./(component)/TermsAndPrivacyText";
import { useSignupMutation } from "@/lib/api/auth/authSlice";
import { redirect } from "next/navigation";

const SignUp = () => {
  const [formValues, setFormValues] = useState<SignupCredentials>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });
  const [verifyRedirect, setVerifyRedirect] = useState(false);

  const [signup, { isLoading }] = useSignupMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Form values:", formValues);
      const response = await signup(formValues).unwrap();
      console.log("Signup successful:", response);
      setVerifyRedirect(true);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  useEffect(() => {
    if (verifyRedirect) {
      redirect("/verifyEmail");
    }
  }, [verifyRedirect]);

  return (
    <div className="flex justify-center items-center text-[14px]">
      <div className="h-screen flex justify-center flex-col gap-3 items-center w-[50%]">
        <div className="text-4xl leading-9 text-center font-extrabold w-[50%]">
          Sign Up Today!
        </div>
        <button className="w-[50%] h-auto rounded-lg border border-gray-300 px-4 py-3 mx-4 my-2 flex items-center justify-center gap-2">
          <FcGoogle size={25} />
          <span className="font-[700] text-primary-500">
            Sign Up with Google
          </span>
        </button>

        <HorizontalLineWithText text="Or Sign Up with Email" />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-2 w-[50%]"
        >
          {fields.map((field, index) => (
            <InputField
              width="w-full"
              key={index}
              label={field.label}
              placeholder={field.placeholder}
              name={field.name}
              onChange={handleInputChange}
              type={
                field.label.toLowerCase().includes("password") ||
                field.label.toLowerCase().includes("confirm password")
                  ? "password"
                  : "text"
              }
            />
          ))}

          <button
            type="submit"
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.5 : 1 }}
            className="w-full h-auto rounded-[80px] border text-white bg-primary-500 border-gray-300 px-4 py-3 mx-4 my-2 flex items-center justify-center gap-2"
          >
            Continue
          </button>
        </form>

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
