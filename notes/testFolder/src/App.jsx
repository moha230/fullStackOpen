//importing the userState function from the react library
import { useState } from "react";

//create a display component

const Display = ({ counter }) => <div>{counter}</div>;

//create a button component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// main component ( entry point of the app)
const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;
