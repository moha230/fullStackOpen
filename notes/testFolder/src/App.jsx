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
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}

export default App;
