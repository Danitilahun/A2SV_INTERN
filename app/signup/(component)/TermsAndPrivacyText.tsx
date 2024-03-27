import React from "react";
import Link from "next/link"; // Assuming you are using Next.js for routing

interface TermsAndPrivacyTextProps {
  text: string;
}

const TermsAndPrivacyText: React.FC<TermsAndPrivacyTextProps> = ({ text }) => {
  return (
    <div className="w-[50%]">
      <span className="text-gray-700">
        {text}{" "}
        <Link href="/" className="text-primary-500 font-semibold">
          Terms of Service
        </Link>
        <span className="text-gray-700"> and</span>
        <Link href="/" className="text-primary-500 font-semibold">
          {" "}
          Privacy Policy
        </Link>
      </span>
    </div>
  );
};

export default TermsAndPrivacyText;
