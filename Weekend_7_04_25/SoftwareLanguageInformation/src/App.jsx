import { useState } from "react";
import languageDetails from "./languageDetails";
import "./App.css";

function App() {
  const [lang, setlang] = useState("");
  const [details, setdetails] = useState("");

  const handleButtonCick = (language) => {
    return setlang(language), setdetails(languageDetails[language]);
  };

  return (
    <div>
      <div className="header">
        <h1>Language Details</h1>
      </div>
      <div className="parentContainer">
        <div className="buttonContainer">
          {Object.keys(languageDetails).map((language) => {
            return (
              <div key={language}>
                <button
                  className="bt"
                  onClick={() => handleButtonCick(language)}
                >
                  {language}
                </button>
              </div>
            );
          })}
        </div>
        <div className="displayArea">
          <h1>{lang}</h1>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
