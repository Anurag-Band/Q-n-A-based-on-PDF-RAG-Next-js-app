import Link from "next/link";
import React from "react";

const Alert = () => {
  return (
    <div className="max-w-max flex justify-between py-4 px-8 bg-[#fad2e1]  text-[#7c193d]">
      <p className="font-sans">
        This is NOT working because{" "}
        <span className="font-bold text-black">OpenAI API</span> is no more Free
        - for Demo go to{" "}
        <Link
          target="_blank"
          className="text-red-500 font-bold cursor-pointer underline"
          href={
            "https://github.com/Anurag-Band/Q-n-A-based-on-PDF-RAG-Next-js-app"
          }
        >
          My Gihub
        </Link>{" "}
        , also works locally if you add your OpenAI API key
      </p>
    </div>
  );
};

export default Alert;

