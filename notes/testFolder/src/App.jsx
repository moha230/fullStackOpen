import { useState } from "react"; // import the use State function

const App = () => {
  const [counter, setCounter] = useState(0);

  // separting the event handlers in seprate functions

  //increment function
  const incrementByOne = () => setCounter(counter + 1);

  //decrement function
  const decrementByOne = () => setCounter(counter - 1);

  //reset function

  const resetCounter = () => setCounter(0);
  return (
    <div>
      <div>{counter}</div>
      <hr />
      <button onClick={incrementByOne}>plus</button>
      <hr />
      <button onClick={decrementByOne}>minus</button>
      <hr />
      <button onClick={resetCounter}>reset</button>
    </div>
  );
};

export default App;
