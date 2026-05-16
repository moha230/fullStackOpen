//importing the userState function from the react library
import { useState } from "react";

// main component ( entry point of the app)
const App = () => {
  const [counter, setCounter] = useState(0);

  //lets register an event handler function to add the counter 
  const handlClick = () => {
    setCounter(counter + 1 )
  };

  //lets register an event handler function to reset the counter 

  const resetClick = () => {
    setCounter(0)
  }

  return (
    <div>
      <div>
        <button onClick={resetClick}>reset</button>
      </div>
      <div>{counter}</div>
      <div>
        <button onClick={handlClick}>plus</button>
      </div>
    </div>
  );
};

export default App;
