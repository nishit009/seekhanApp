import React, { useEffect, useState, useContext } from "react";
import downloadFile from "../assets/downloadFile.png";
import axios from "axios";
import { AuthContext } from "../AuthorContext";

function VoiceRag() {
  const [ragDetails, setRagDetails] = useState({
    mp3File: null,
    TypeQ: "",
    nQuestion: 0,
    loading: false,
    prompt: "",
    ans: "",
  });
  const [mp3Array, setMp3Array] = useState([]);
  const { addToHistory } = useContext(AuthContext);
  // useEffect(() => {
  //   const savedOutput = localStorage.getItem("mp3Array");
  //   if (savedOutput) {
  //     setMp3Array(JSON.parse(savedOutput));
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("mp3Array", JSON.stringify(mp3Array));
  // }, [mp3Array]);
  const updateFile = (e) => {
    const file = e.target.files[0];
    setRagDetails((prev) => ({ ...prev, mp3File: file }));
  };
  const getAns = async (e) => {
    e.preventDefault();
    try {
      setRagDetails((prev) => ({ ...prev, loading: true }));
      const dataForm = new FormData();
      dataForm.append("type", ragDetails.TypeQ);
      dataForm.append("number", ragDetails.nQuestion);
      dataForm.append("file", ragDetails.mp3File);
      const response = await axios.post(
        "http://127.0.0.1:5000/VoiceRag",
        dataForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const result = response.data.message;
      const prompt = `generate ${ragDetails.nQuestion} ${ragDetails.TypeQ} from this file ${ragDetails.file}`;
      setRagDetails((prev) => ({ ...prev, ans: result, prompt: prompt }));
      setMp3Array((prev) => [...prev, { prompt, ans: result }]);
      addToHistory(prompt, result);

      console.log(result);
    } catch (error) {
      console.log(`error posting in flask ${error}`);
    } finally {
      setRagDetails((prev) => ({ ...prev, loading: false }));
    }
  };
  const getFileDownload = async () => {
    try {
      const timestamp = Math.floor(Date.now() / 1000);
      const dataFile = new Blob([answers.join("\n")], { type: "text/plain" });
      const link = document.createElement("a");
      link.download = `answers_${type}_${question}_q_${timestamp}.txt`;
      link.href = URL.createObjectURL(dataFile);
      document.body.appendChild(link); // Append to body before clicking
      link.click();
      document.body.removeChild(link); // Remove after clicking
      URL.revokeObjectURL(link.href);
    } catch (downloadError) {
      console.error(`Download error: ${downloadError.message}`);
    }
  };
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[1100px] h-screen bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 flex flex-col gap-y-[2px]">
        <p className="text-white text-4xl font-semibold mb-8">
          Generate from Transcript
        </p>
        <div className="flex-grow bg-gray-900 w-full flex flex-col h-auto overflow-y-auto scrollbar text-white">
          {mp3Array.map((value, index) => (
            <div key={index} className="bg-grey-300">
              <label>{value.prompt}</label>
              <p>{value.ans}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          <form
            className="space-y-4 bg-gray-800 min-h-[150px] flex-grow"
            onSubmit={getAns}
          >
            <div className="flex flex-row gap-x-5">
              <div className="flex-grow space-y-2">
                <div className="flex items-center space-x-4">
                  <label className="text-white" htmlFor="file">
                    Upload an MP3 file:
                  </label>

                  <label
                    htmlFor="file"
                    className="cursor-pointer px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Choose File
                  </label>

                  <input type="file"  id="file"  accept=".mp3" onChange={updateFile}  className="hidden"
                  />

                  <span id="file-name" className="text-white"></span>
                </div>

                <div>
                  <label htmlFor="type" className="block text-white">
                    Question Type:
                  </label>
                  <select
                    name="type"
                    onChange={(e) =>
                      setRagDetails((prev) => ({
                        ...prev,
                        TypeQ: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      ------- Select Question Type -------
                    </option>
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
                      min={1}
                      value={ragDetails.nQuestion}
                      onChange={(e) =>
                        setRagDetails((prev) => ({
                          ...prev,
                          nQuestion: e.target.value,
                        }))
                      }
                      className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                      placeholder="Number of questions"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 text-white rounded-lg"
                >
                  {ragDetails.loading ? "Generating..." : "Generate Questions"}
                </button>
              </div>
            </div>
          </form>
          <div>
          <button className="Btn" onClick={getFileDownload}>
  <svg className="svgIcon" viewBox="0 0 384 512" height="1em">
    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
  </svg>
  <span className="tooltip">Download</span>
</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceRag;
