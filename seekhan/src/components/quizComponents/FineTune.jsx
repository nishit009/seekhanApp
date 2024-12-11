import React, { useState } from "react";

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
      <div className="w-[1100px] h-screen bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 flex flex-col flex-wrap gap-y-[2px]">
        <div className="flex-grow m-auto bg-gray-900 w-full">
          {error && (
            <div className="bg-red-600 text-white p-2 rounded-lg">
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
        <form
          className="space-y-4 bg-gray-800 min-h-[150px]"
          onSubmit={pushAll}
        >
          <div className="flex flex-row">
            <div className="flex-grow"></div>
            <div className="w-[300px] flex flex-col justify-center items-center"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FineTune;
