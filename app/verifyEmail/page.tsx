// import React from "react";
// import OTPInput from "./(component)/OTPInput";

// const VerifyEmail = () => {
//   return (
//     <div className="flex flex-col justify-center items-center text-[14px]">
//       <div className="h-screen flex justify-center flex-col gap-3 items-center w-[50%]">
//         <div className="text-4xl leading-9 text-center font-extrabold w-[50%]">
//           Verify Email
//         </div>

//         <div className="w-[50%] text-[12px]">
//           <span className="text-gray-700">
//             We&apos;ve sent a verification code to the email address you
//             provided. To complete the verification process, please enter the
//             code here.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmail;
"use client";
import React, { useState, useEffect, useRef } from "react";
import OTPInput from "./(component)/OTPInput";
import { useVerifyEmailMutation } from "@/lib/api/auth/authSlice";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const [timeLeft, setTimeLeft] = useState(30);

  // Countdown timer for resend code
  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.target.value;
    setOtp(newOtp);

    // Move focus to next input
    if (element.target.value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Implement the mutation hook and submission logic
  const [verifyEmail, { data, loading, error }] = useVerifyEmailMutation();

  const handleSubmit = async () => {
    // Convert the OTP array into a string
    const otpCode = otp.join("");
    try {
      await verifyEmail({ variables: { otpCode } });
      // Handle success response
    } catch (err) {
      // Handle error
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-[14px]">
      <div className="h-screen flex justify-center flex-col gap-10 items-center w-[50%]">
        <div className="text-4xl leading-9 text-center font-extrabold w-[50%]">
          Verify Email
        </div>
        <div className="w-[50%] text-[14px]">
          <span className="text-gray-700">
            We&apos;ve sent a verification code to the email address you
            provided. To complete the verification process, please enter the
            code here.
          </span>
        </div>
        <div className="flex gap-2 w-[50%] items-center justify-center">
          {otp.map((value, index) => (
            <OTPInput
              key={index}
              name={`otp-${index}`}
              value={value}
              onChange={(e) => handleChange(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center flex-col">
          <span className="">
            You can request to{" "}
            <span className="font-bold text-primary-600">Resend code</span> in
          </span>
          <span className="block font-bold text-primary-600">
            in {timeLeft}s
          </span>
        </div>
        <button className="w-[50%] h-auto rounded-[80px] border text-white bg-primary-500 border-gray-300 px-4 py-3 mx-4 my-2 flex items-center justify-center gap-2">
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
