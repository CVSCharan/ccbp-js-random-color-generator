import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setbackgroundColor] = useState("lightgrey");
  let dummy = [
    "green",
    "black",
    "pink",
    "royalblue",
    "blue",
    "red",
    "yellow",
    "skyblue",
    "darkgreen",
    "lightgreen",
    "lightred",
  ];

  const onClickButton = () => {
    const rand = Math.ceil(Math.random() * 10);
    setbackgroundColor(dummy[rand]);
  };

  return (
    <div class="container main-container">
      <div class="row">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div class="text-center p-4">
            <h1 class="instruction">Click the below button to change color</h1>
            <button id="button" class="button" onClick={onClickButton}>
              Click Me
            </button>
          </div>
        </div>
        <div
          id="bgContainer"
          class="col-12 col-md-6 bg-container"
          style={{ backgroundColor: backgroundColor }}
        ></div>
      </div>
    </div>
  );
}

export default App;
