import React, { useContext } from "react";
import { AuthContext } from "../AuthorContext";

const History = () => {
  const { history } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">History</h1>
      {history.length > 0 ? (
        <div className="w-full max-w-4xl space-y-4">
          {history.map((entry, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded shadow-md border border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2">Prompt:</h2>
              <p className="text-gray-300 mb-2">{entry.prompt}</p>
              <h3 className="text-lg font-semibold">Result:</h3>
              <p className="text-gray-400">{entry.result}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No history available yet.</p>
      )}
    </div>
  );
};

export default History;
