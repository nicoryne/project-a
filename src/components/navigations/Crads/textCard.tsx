import React from "react";

const TextCard = ({ t, i }: { t: string; i: number }) => {
  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="">
      <div className="flex w-full items-center justify-between mb-5 px-5">
        <p className="text-xl font-[600]">
          {`(${i + 1}) `}
          {new Date().toUTCString()}
        </p>
        <button
          onClick={() => {
            copyToClipBoard(t);
          }}
          className="bg-white text-black text-sm md:text-base rounded-md px-5 py-2 hover:opacity-80 hover:transition transform"
        >
          Copy
        </button>
      </div>
      <textarea
        className="w-full p-5 min-h-[30vh] outline-none bg-[#2c2c2c] rounded-xl"
        defaultValue={t}
      ></textarea>
    </div>
  );
};

export default TextCard;
