import React, { useState } from "react";

function Quiz() {
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
      // pushPrompt(res.Result);
      const dataFile = new Blob([result.Result], { type: ".txt" });
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

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[1100px] h-screen bg-gray-800 p-6 rounded-xl shadow-lg space-y-6 flex flex-col flex-wrap gap-y-[2px]">
        <h2 className="text-white text-2xl font-bold text-center">
          Quiz Generator
        </h2>
        {error && (
          <div className="bg-red-600 text-white p-2 rounded-lg">
            <strong>Error:</strong> {error}
          </div>
        )}
        <div className="flex-grow m-auto">
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
        <form className="space-y-4" onSubmit={pushAll}>
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
            <label className="block text-white" htmlFor="questions">
              Number of questions:
            </label>
            <input
              type="number"
              id="questions"
              value={question}
              onChange={(e) => setQuestions(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
              placeholder="Number of questions"
            />
          </div>

          <div>
            <label className="block text-white" htmlFor="type">
              Question type:
            </label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
              placeholder="e.g., multiple-choice, true/false"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quiz;
