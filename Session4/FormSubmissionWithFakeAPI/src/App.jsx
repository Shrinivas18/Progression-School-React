import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setformData] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/posts";
    console.log("inside handleSubmit");
    try {
      console.log("inside try block");
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setformData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="parentContainer">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input
            className="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title..."
          />
          <input
            className="body"
            type="text"
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Enter body..."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
