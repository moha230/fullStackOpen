//importing the userState function from the react library
import { useState } from "react";

// main component ( entry point of the app)
const App = () => {
  const [counter, setCounter] = useState(0);

  //lets register an event handler function to add the counter 
  const increaseByOne = () => {
    setCounter(counter + 1 )
  };

  //lets register an event handler function to reset the counter 

  const setToZero = () => {
    setCounter(0)
  }

  return (
    <div>
      <div>
        <button onClick={setToZero}>reset</button>
      </div>
      <div>{counter}</div>
      <div>
        <button onClick={increaseByOne}>plus</button>
      </div>
    </div>
  );
};

export default App;
