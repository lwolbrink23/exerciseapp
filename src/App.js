import "./App.css";
import DurFunction from "./components/DurationExercise";
import RepFunction from "./components/RepetitionExercise";
import RunFunction from "./components/RunningExercise";
import { useState } from "react";

function App() {
  const [displayMode, setDisplayMode] = useState(1);
  const [name, setName] = useState("");

  const showMenu = displayMode === 1;
  const showDurApp = displayMode === 2;
  const showRepApp = displayMode === 3;
  const showRunApp = displayMode === 4;

  function showExercise(number, name) {
    setDisplayMode(number);
    setName(name);
  }

  let menu = (
    <div className="App">
      <header className="App-header">
        <h1>Go Do Something!</h1>
        <h3>select an exercise:</h3>
        <button onClick={() => showExercise(3, "Push Ups")}>Push Ups</button>
        <button onClick={() => showExercise(2, "Bicycling")}>Bicycling</button>
        <button onClick={() => showExercise(3, "Jumping Jacks")}>
          Jumping Jacks
        </button>
        <button onClick={() => showExercise(4, "Running")}>Running</button>
        <button onClick={() => showExercise(3, "Sit Ups")}>Sit Ups</button>
      </header>
    </div>
  );

  return (
    <div>
      <div id="div1">
        {showMenu ? menu : null}
        {showDurApp ? <DurFunction name={name} /> : null}
        {showRepApp ? <RepFunction name={name} /> : null}
        {showRunApp ? <RunFunction name={name} /> : null}
      </div>
    </div>
  );
}

export default App;
