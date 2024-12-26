import React, { useState } from "react";
import downloadFile from "../assets/downloadFile.png";

function FineTune() {
  const [topic, setTopic] = useState("");
  const [question, setQuestions] = useState(0);
  const [type, setType] = useState("");
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const pushPrompt = (answer) => {
    setAnswers((prev) => [...prev, answer]);
    setTopic("");
    setQuestions(0);
    setType("");
  };

  const pushAll = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Topic: topic,
          noQ: question,
          Type: type,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        pushPrompt(result.Result);
        try {
          const res = await fetch("http://localhost:6969/prompt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userPrompt: `generate ${question} ${type} questions on ${topic}`,
              answer: result,
            }),
          });
          const backendResponse = await res.json();
          console.log(backendResponse);
        } catch (error) {
          console.log(`error is this: ${error}`);
        }
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch (error) {
      setError("Error connecting to the backend");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const getThefilesdownloaded = async () => {
    const dataFile = new Blob([answers[answers.length - 1]], { type: ".txt" });
    const formData = new FormData();
    formData.append("file", dataFile);
    try {
      const response_file = await fetch("http://localhost:6969/files", {
        method: "POST",
        body: formData,
      });
      const resultFile = await response_file.json();
      console.log(resultFile);
    } catch (error) {
      console.log(`error is this ${error}`);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[1100px] h-screen bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 flex flex-col gap-y-[2px] ">
        <div className="flex-grow bg-gray-900 w-full flex flex-col h-auto overflow-y-auto scrollbar text-white">
          {error && (
            <div className="bg-red-600 text-white p-2 rounded-lg ">
              <strong>Error:</strong> {error}
            </div>
          )}
          {answers.length > 0 && (
            <div className="bg-gray-700 text-white p-4 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">
                Generated Questions
              </h3>
              {answers.map((value, index) => (
                <div className="bg-gray-600 p-2 mb-2 rounded-lg" key={index}>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-row">
          <form
            className="space-y-4 bg-gray-800 min-h-[150px] flex-grow"
            onSubmit={pushAll}
          >
            <div className="flex flex-row gap-x-5">
              <div className="flex-grow space-y-2">
                <div>
                  <label className="block text-white" htmlFor="topic">
                    Enter the topic:
                  </label>
                  <input
                    type="text"
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                    placeholder="Topic"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-white">
                    Question Type:
                  </label>
                  <select
                    name="type"
                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
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
                      value={question}
                      onChange={(e) => setQuestions(Number(e.target.value))}
                      className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                      placeholder="Number of questions"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 text-white rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Generating..." : "Generate Questions"}
                </button>
              </div>
            </div>
          </form>
          <div>
            <button onClick={getThefilesdownloaded}>
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

export default FineTune;
