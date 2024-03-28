"use client";
import React, { useEffect, useState } from "react";
import HorizontalLineWithText from "../../components/HorizontalLineWithText";
import InputField from "../../components/InputField";
import Link from "next/link";
import { fields } from "./(constants)/formFields";
import { useLoginMutation } from "@/lib/api/auth/authSlice";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { setEmail, setUser } from "@/lib/features/auth/authSlice";
import { SuccessToast } from "@/components/successToast";
import { ErrorToast } from "@/components/errorToast";

const SignIn = () => {
  const [formValues, setFormValues] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch<AppDispatch>();

  const [jobRedirect, setJobRedirect] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(formValues).unwrap();

      dispatch(setUser(response.data));
      SuccessToast("Login successful!!!");
      setJobRedirect(true);
    } catch (error: any) {
      console.error("Signup error:", error);
      ErrorToast(error.data.message || "Invalid email or password!");
    }
  };

  useEffect(() => {
    if (jobRedirect) {
      redirect("/job");
    }
  }, [jobRedirect]);
  return (
    <div className="text-[14px] flex flex-col gap-4 items-center justify-center absolute top-[141px] left-[1092px] w-[408px] h-[390px] md:w-[calc(100vw - 816px)] md:left-[calc(50% + 408px)] md:transform md:-translate-x-1/2 md:top-[calc(50% - 195px)] lg:w-[calc(100vw - 816px)] lg:left-[calc(50% + 408px)] lg:transform lg:-translate-x-1/2 lg:top-[calc(50% - 195px)] xl:w-[calc(100vw - 816px)] xl:left-[calc(50% + 408px)] xl:transform xl:-translate-x-1/2 xl:top-[calc(50% - 195px)]">
      <div className="text-2xl leading-9 text-center font-extrabold w-[90%]">
        Welcome Back,
      </div>
      <HorizontalLineWithText text="" width="w-[90%]" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2 w-[90%]"
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
              field.label.toLowerCase().includes("password")
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
          Login
        </button>
      </form>

      <div className="flex gap-1 w-[90%]">
        <span className="text-gray-700">Don’t have an account?</span>
        <Link href="/signup" className="text-primary-500 font-semibold">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
