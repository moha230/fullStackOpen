//importing the userState function from the react library
import { useState } from "react";

//create a display component

const Display = ({ counter }) => <div>{counter}</div>;

//create a button component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// main component ( entry point of the app)
const App = () => {
  // we need to create two peaces of state for the application named left and right which both have the value 0
  const [left, setleft] = useState(0);
  const [right, setright] = useState(0);

  console.log("rendering with left value", left);
  console.log("rendering with left value", right);

 

  return (
    <div>
      {left}
      <button onClick={() => setleft(left + 1)}>left</button>
      <button onClick={()=> setright(right+1)} >right</button>
      {right}
    </div>
  );
};

export default App;
