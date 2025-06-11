import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setformData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setformData({ ...formData, feedback: "" }); // adding feedback property when submitting the form
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { formData });
  };
  return (
    <div className="parentContainer">
      <div className="formContainer">
        <form onSubmit={handleFormSubmit}>
          <input
            className="fullName"
            name="fullName"
            type="text"
            onChange={handleInputChange}
            placeholder="Enter name here..."
          />
          <input
            className="email"
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter email here..."
          />
          <input
            className="message"
            name="message"
            type="text"
            onChange={handleInputChange}
            placeholder="Enter message here..."
          />
          <input
            className="feedback"
            name="feedback"
            type="text"
            onChange={handleInputChange}
            placeholder="Enter feedback here..."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
