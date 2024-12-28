import React, { useState } from "react";
import Rag from "./quizComponents/Rag";
import logo1 from "./assets/teacher.png";
import logo2 from "./assets/robot-assistant.png";
import logo3 from "./assets/file.png";
function Quiz() {
  function openFineTune() {
    window.location.href = "FineTune";
  }
  const openRag = () => {
    window.location.href = "Rag";
  };
  const openVoiceRag = () => {
    window.location.href = "VoiceRag";
  };
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center flex-col">
      <p className="text-white text-4xl font-semibold mb-8">Choose an Option</p>

      <div className="lg:w-[795px] h-[495px] bg-[#002D62] rounded-xl hover:bg-gray-900 flex flex-row flex-wrap items-center justify-center gap-x-2">
        <div className="lg:w-[200px] h-[300px] bg-gray-900 rounded-xl flex justify-center items-center">
          <div className="lg:w-[195px] h-[295px] bg-[#002D62] rounded-xl hover:bg-gray-900">
            <button
              className="w-full h-full hover:cursor-pointer text-white"
              onClick={openVoiceRag}
            >
              <img src={logo1} alt="voice RAG" className="w-full" />
              <span className="mt-2 text-sm text-white">
                I have a Lecture File
              </span>
            </button>
          </div>
        </div>
        <div className="lg:w-[200px] h-[300px] bg-gray-900 rounded-xl flex justify-center items-center">
          <div className="lg:w-[195px] h-[295px] bg-[#002D62] rounded-xl hover:bg-gray-900">
            <button
              className="w-full h-full hover:cursor-pointer"
              onClick={openRag}
            >
              <img src={logo3} alt="PDF upload" className="w-full" />
              <span className="mt-2 text-sm text-white">I have a PDF</span>
            </button>
          </div>
        </div>
        <div className="lg:w-[200px] h-[300px] bg-gray-900 rounded-xl flex justify-center items-center">
          <div className="lg:w-[195px] h-[295px] bg-[#002D62] rounded-xl hover:bg-gray-900">
            <button
              className="w-full h-full hover:cursor-pointer"
              onClick={openFineTune}
            >
              <img src={logo2} alt="Generate" className="w-full" />
              <span className="mt-2 text-sm text-white">I have a Topic</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
