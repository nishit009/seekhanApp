import React, { useEffect, useState } from "react";
import downloadFile from "../assets/downloadFile.png";
import axios from "axios";

function VoiceRag() {
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

  useEffect(() => {
    const savedOutput = localStorage.getItem("output");
    if (savedOutput) {
      setOutput(JSON.parse(savedOutput));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("output", JSON.stringify(output));
  }, [output]);

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
      console.log("Hi");

      const response = await axios.post("http://127.0.0.1:5000/VoiceRag", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const answers = response.data.message;
      setDetails((prev) => ({ ...prev, answers: answers }));
      setOutput((prev) => [...prev, { ...details, answers }]);
    } catch (error) {
      console.log(`Error in the POST request: ${error}`);
    }
    setDetails((prev) => ({ ...prev, loading: false }));
  };

  const getFileDownload = async () => {
    try {
      // Set loading state to true while processing
      setDetails((prev) => ({ ...prev, loading: true }));

      // Create a timestamp rounded to seconds (milliseconds removed)
      const timestamp = Math.floor(Date.now() / 1000);

      // Create a new Blob with the answers and specify the type as plain text
      const dataFile = new Blob([details.answers], { type: "text/plain" });

      // Create a link element
      const link = document.createElement("a");

      // Set the download attribute with a filename including the question type, number of questions, and timestamp (to seconds)
      link.download = `answers_${details.questionType}_${details.numberOfQuestions}_q_${timestamp}.txt`;

      // Create a URL for the Blob and set it as the href of the link
      link.href = URL.createObjectURL(dataFile);

      // Programmatically click the link to trigger the download
      link.click();

      // Clean up the URL object
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.log(`Error in the file download: ${error}`);
    }

    // Set loading state to false once the process is complete
    setDetails((prev) => ({ ...prev, loading: false }));
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[1100px] h-screen bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 flex flex-col gap-y-[2px]">
        <div className="flex-grow bg-gray-900 w-full flex flex-col h-auto overflow-y-auto scrollbar text-white">
          {output.map((value, index) => (
            <div key={index}>
              <label>{value.mainQuestion}</label>
              <p>{value.answers}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          <form className="space-y-4 bg-gray-800 min-h-[150px] flex-grow" onSubmit={getQuestions}>
            <div className="flex flex-row gap-x-5">
              <div className="flex-grow space-y-2">
                <div>
                  <label className="block text-white" htmlFor="file">
                    Upload an MP3 file:
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept=".mp3"
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
                <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg">
                  {details.loading ? "Generating..." : "Generate Questions"}
                </button>
              </div>
            </div>
          </form>
          <div>
            <button onClick={getFileDownload} className="ml-4">
              <img src={downloadFile} alt="Download File" className="w-[50px] h-[50px] mt-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceRag;
