import React from "react";
import downloadFile from "../assets/downloadFile.png";

function Rag() {
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[1100px] h-screen bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 flex flex-col gap-y-[2px]">
        <div className="flex-grow bg-gray-900 w-full flex flex-col h-auto overflow-y-auto scrollbar text-white"></div>
        <div className="flex flex-row">
          <form className="space-y-4 bg-gray-800 min-h-[150px] flex-grow">
            <div className="flex flex-row gap-x-5">
              <div className="flex-grow space-y-2">
                <div>
                  <label className="block text-white" htmlFor="file">
                    Upload a file:
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-white">
                    Question Type:
                  </label>
                  <select
                    name="type"
                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                    defaultValue={"multiple-choice"}
                  >
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    <option value="fill-in-the-blank">Fill-in-the-Blank</option>
                  </select>
                </div>
              </div>
              <div className="w-[300px] flex flex-col justify-center items-center gap-y-7">
                <div className="w-[300px] flex flex-row justify-center items-center gap-x-2">
                  <div className="flex-grow">
                    <label className="block text-white" htmlFor="questions">
                      Number of questions:
                    </label>
                    <input
                      type="number"
                      id="questions"
                      className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                      placeholder="Number of questions"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full p-3 bg-blue-600 text-white rounded-lg"
                >
                  Generate Questions
                </button>
              </div>
            </div>
          </form>
          <div>
            <button>
              <img
                src={downloadFile}
                alt="Download File"
                className="w-[50px] h-[50px] mt-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rag;
