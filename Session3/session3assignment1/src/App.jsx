import "./App.css";

function App() {
  const arr = ["Sansa", "Bob", "Rickson"];

  const handleButtonClick = (item) => {
    alert(`Hello! ${item}`);
  };
  return (
    <div>
      {arr.map((item, index) => {
        return (
          <div className="container" key={index}>
            <button className="bt" onClick={() => handleButtonClick(item)}>
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
