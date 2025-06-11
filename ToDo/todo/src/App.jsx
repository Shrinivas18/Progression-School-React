import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasksList, settasksList] = useState([]);
  const [task, settask] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    settask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (task.name && task.age && task.addr) {
      settasksList((prev) => [...prev, task]);
      settask({ name: "", age: "", addr: "" });
    }
  };

  const deleteTask = (name) => {
    settasksList(tasksList.filter((item) => item.name !== name));
  };

  const editTask = (name) => {
    console.log("name", name);
    const content = tasksList.find((item) => item.name === name);
    console.log("content:::::::::", content);
    if (content) settask(content);
  };
  console.log("tasksList", tasksList);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={task.name || ""}
        onChange={handleChange}
        placeholder="Enter Name Here..."
      />
      <input
        type="number"
        name="age"
        value={task.age}
        onChange={handleChange}
        placeholder="Enter Age Here..."
      />
      <input
        type="text"
        name="addr"
        value={task.addr}
        onChange={handleChange}
        placeholder="Enter Name Here..."
      />
      <button className="btn" onClick={handleClick}>
        Add Task
      </button>

      <div className="content">
        <table className="table-data">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasksList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className="btn" onClick={() => editTask(item.name)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => deleteTask(item.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
