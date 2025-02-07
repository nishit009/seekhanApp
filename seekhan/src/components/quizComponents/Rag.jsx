import React, { useEffect, useState, useContext } from "react";
import "../assets/DownloadButton.css";
import axios from "axios";
import { AuthContext } from "../AuthorContext";

function Rag() {
  const [details, setDetails] = useState({
    file: null,
    questionType: "",
    numberOfQuestions: 0,
    loading: false,
    answers: "",
    mainQuestion: "",
    id: Date.now(),
  });
  const [output, setOutput] = useState([]);
  const { addToHistory } = useContext(AuthContext);

  // useEffect(() => {
  //   const savedOutput = localStorage.getItem("output");
  //   if (savedOutput) {
  //     setOutput(JSON.parse(savedOutput));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("output", JSON.stringify(output));
  // }, [output]);

  const fileUpdate = (e) => {
    const file = e.target.files[0];
    setDetails((prev) => ({ ...prev, file: file }));
  };

  const getQuestions = async (e) => {
    try {
      e.preventDefault();
      setDetails((prev) => ({ ...prev, loading: true }));
      const formData = new FormData();
      formData.append("type", details.questionType);
      formData.append("number", details.numberOfQuestions);
      formData.append("file", details.file);
      const response = await axios.post("http://127.0.0.1:5000/Rag", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const answers = response.data.message;
      setDetails((prev) => ({ ...prev, answers: answers }));
      setOutput((prev) => [...prev, { ...details, answers }]);
      let prompt = `generate ${details.numberOfQuestions} ${details.questionType} from this file ${details.file}`;
      addToHistory(prompt, answers);
    } catch (error) {
      console.log(`error is this in post request ${error}`);
    }
    setDetails((prev) => ({ ...prev, loading: false }));
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
          Generate from PDF
        </p>

        <div className="flex-grow bg-gray-900 w-full flex flex-col h-auto overflow-y-auto scrollbar text-white">
          {output.map((value, index) => (
            <div key={index}>
              <label>{value.mainQuestion}</label>
              <p>{value.answers}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          <form
            className="space-y-4 bg-gray-800 min-h-[150px] flex-grow"
            onSubmit={getQuestions}
          >
            <div className="flex flex-row gap-x-5">
              <div className="flex-grow space-y-2">
                <div>
                  <label className="block text-white" htmlFor="file">
                    Upload a file:
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={fileUpdate}
                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-white">
                    Question Type:
                  </label>
                  <select
                    name="type"
                    onChange={(e) =>
                      setDetails((prev) => ({
                        ...prev,
                        questionType: e.target.value,
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
                      value={details.numberOfQuestions}
                      onChange={(e) =>
                        setDetails((prev) => ({
                          ...prev,
                          numberOfQuestions: e.target.value,
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
                  {details.loading ? "Generating..." : "Generate Questions"}
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

export default Rag;
