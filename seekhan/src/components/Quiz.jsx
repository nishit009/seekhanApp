import React, { useState } from "react";
import Rag from "./quizComponents/Rag";
import logo from "./assets/logo.png";
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
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[400px] md:w-[700px] lg:w-[1000px] h-screen bg-gray-800 flex items-center justify-center">
        <div className="lg:w-[800px] h-[500px] bg-gray-900 rounded-xl flex items-center justify-center">
          <div className="lg:w-[795px] h-[495px] bg-gray-800 rounded-xl hover:bg-gray-900 flex flex-row flex-wrap items-center justify-center gap-x-2">
            <div className="lg:w-[200px] h-[300px] bg-gray-900 rounded-xl flex justify-center items-center">
              <div className="lg:w-[195px] h-[295px] bg-gray-800 rounded-xl hover:bg-gray-900">
                <button
                  className="w-full h-full hover:cursor-pointer text-white"
                  onClick={openVoiceRag}
                >
                  <img src={logo} alt="voice RAG" className="w-full" />
                </button>
              </div>
            </div>
            <div className="lg:w-[200px] h-[300px] bg-gray-900 rounded-xl flex justify-center items-center">
              <div className="lg:w-[195px] h-[295px] bg-gray-800 rounded-xl hover:bg-gray-900">
                <button
                  className="w-full h-full hover:cursor-pointer"
                  onClick={openRag}
                ></button>
              </div>
            </div>
            <div className="lg:w-[200px] h-[300px] bg-gray-900 rounded-xl flex justify-center items-center">
              <div className="lg:w-[195px] h-[295px] bg-gray-800 rounded-xl hover:bg-gray-900">
                <button
                  className="w-full h-full hover:cursor-pointer"
                  onClick={openFineTune}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
