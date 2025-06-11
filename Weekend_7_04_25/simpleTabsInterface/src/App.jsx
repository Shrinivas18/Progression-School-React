import { useEffect, useState } from "react";
import "./App.css";
import Info from "./Info";
import Details from "./Details";
import Help from "./Help";

function App() {
  const [activeTab, setActiveTab] = useState("info");

  function renderTabContent() {
    switch (activeTab) {
      case "info":
        return <Info />;
      case "details":
        return <Details />;
      case "help":
        return <Help />;
      default:
        return null;
    }
  }

  return (
    <div className="container">
      <div className="tabs">
        <h2
          className={activeTab === "info" ? "active" : ""}
          onClick={() => setActiveTab("info")}
        >
          Info
        </h2>
        <h2
          className={activeTab === "details" ? "active" : ""}
          onClick={() => setActiveTab("details")}
        >
          Details
        </h2>
        <h2
          className={activeTab === "help" ? "active" : ""}
          onClick={() => setActiveTab("help")}
        >
          Help
        </h2>
      </div>
      <div className="content">{renderTabContent()}</div>
    </div>
  );
}

export default App;
