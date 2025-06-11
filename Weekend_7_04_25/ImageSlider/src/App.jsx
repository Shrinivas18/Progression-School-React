import { useState } from "react";
import "./App.css";
import motivationalQuotes from "./motivationalQuotes";
function App() {
  const [count, setCount] = useState(0);
  const [previous, setprevious] = useState(0);
  const [next, setnext] = useState(1);
  const [imageIndex, setimageIndex] = useState(0);

  const urls = [];

  for (let i = 0; i < motivationalQuotes.length; i++) {
    urls.push(motivationalQuotes[i].url);
  }

  const handleNextClick = () => {
    console.log("imageIndex", imageIndex);
    if (imageIndex >= urls.length - 1) {
      setimageIndex(0);
    } else {
      setimageIndex(imageIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    console.log("imageIndex", imageIndex);
    if (imageIndex <= 0) {
      setimageIndex(urls.length - 1);
    } else {
      setimageIndex(imageIndex - 1);
    }
  };

  return (
    <div className="parentContainer">
      <h1>Image Slider</h1>
      <div className="container">
        <div className="previous">
          <button onClick={handlePreviousClick}>
            <img
              className="previousImage"
              src="https://cdn-icons-png.flaticon.com/128/7772/7772244.png"
              alt="Next button"
              height={40}
              width={40}
            />
          </button>
        </div>
        <div className="imageContainer">
          <p className="imageIndex">{imageIndex + 1}</p>
          <img className="img" src={urls[imageIndex]} alt="" />
        </div>

        <div className="next">
          <button onClick={handleNextClick}>
            <img
              className="nextImage"
              src="https://cdn-icons-png.flaticon.com/128/7772/7772244.png"
              alt="Next button"
              height={40}
              width={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
