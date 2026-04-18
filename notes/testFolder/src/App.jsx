import { useState } from "react";
import "./App.css";

// Display component
const Display = ({ counter }) => {
  return <div className="display">{counter}</div>;
};

// Button component
const Button = ({ onClick, text, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <Display counter={counter} />

      {/* Floating buttons */}
      <Button
        onClick={() => setCounter((c) => c + 1)}
        text="plus"
        className="float-one"
      />

      <Button
        onClick={() => setCounter((c) => c - 1)}
        text="minus"
        className="float-two"
      />

      <Button
        onClick={() => setCounter(0)}
        text="reset"
        className="float-three"
      />
    </div>
  );
};

export default App;
