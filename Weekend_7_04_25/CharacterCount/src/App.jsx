import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const MAX_CHAR_LIMIT = 100;
  const WARNING_THRESHOLD = 80;

  const [text, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (e) => {
    const textInput = e.target.value;
    setText(textInput);
    setCharacterCount(textInput.length);
  };

  const isWarning = characterCount >= WARNING_THRESHOLD;

  return (
    <div>
      <h2>Message Input</h2>

      <textarea
        onChange={handleChange}
        value={text}
        maxLength={MAX_CHAR_LIMIT}
        placeholder="Type your message..."
        className="textArea"
        rows={5}
        cols={40}
      />

      <div style={{ marginTop: "0.5rem" }}>
        <strong>
          {characterCount} / {MAX_CHAR_LIMIT}
        </strong>
        {isWarning && (
          <p style={{ color: "orange", marginTop: "0.25rem" }}>
            ⚠️ You're approaching the character limit!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
