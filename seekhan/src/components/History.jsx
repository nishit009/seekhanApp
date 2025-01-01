import { useContext } from "react";
import { AuthContext } from "./AuthorContext.jsx";

function History() {
  const { history } = useContext(AuthContext);

  return (
    <div className="history-container">
      <h2 className="text-center">User History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((entry, index) => (
            <li key={index} className="history-item">
              <p>
                <strong>Question:</strong> {entry.question}
              </p>
              <p>
                <strong>Answer:</strong> {entry.generatedOutput}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No history found.</p>
      )}
    </div>
  );
}

export default History;
