"use client";
import ValorantForm from "@/pages/add-match/valorant-form";
import converter from "@/utils/ocr/converter";
import { useRef, useState } from "react";
import { FaImage } from "react-icons/fa";

export default function AddMatchPage() {
  const imageInputRef: any = useRef(null);

  const [processing, setProcessing] = useState<boolean>(false);

  const [texts, setTexts] = useState<Array<string>>([]);

  const openFileExplorer = () => {
    imageInputRef.current?.click();
  };

  const ocr = async (url: string) => {
    if (url) {
      setProcessing(true);
      await converter(url).then((text) => {
        if (text) {
          const copyTexts = texts;
          copyTexts.push(text);
          setTexts(copyTexts);
          console.log(text);
        }
      });
      setProcessing(false);
    }
  };

  return (
    <div className="text-white">
      <h2 className="px-5 pt-10 text-center md:text-6xl text-3xl font-[800]">
        Add a Match
      </h2>
      <input
        type="file"
        ref={imageInputRef}
        hidden
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            const url: string = URL.createObjectURL(e.target.files?.[0]!);
            ocr(url);
          }
        }}
      />
      <div
        onClick={openFileExplorer}
        onDragOver={(e: any) => {
          e.preventDefault();
        }}
        onDrop={(e: any) => {
          e.preventDefault();
          const url: string = URL.createObjectURL(e.dataTransfer.files?.[0]);
          ocr(url);
        }}
        className="w-full md:p-20 p-5 flex items-center justify-center"
      >
        <div className="w-full p-5 cursor-pointer bg-[#2c2c2c] min-h-[50vh] rounded-xl flex items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <p className="text-center text-4xl font-[700] text-[#424242]">
              {processing ? "Processing Image..." : "Drop Match Results Here!"}
            </p>
            <span className="text-[150px] text-[#424242]">
              <FaImage className={processing ? "animate-pulse" : ""} />
            </span>
          </div>
        </div>
      </div>

      <div className="my-10 md:px-20 px-5 space-y-10">
        {
          texts?.map((t, i) => {
            return <ValorantForm key={i} i={i} t={t} />
          })
        }
      </div>
    </div>
  );
}
