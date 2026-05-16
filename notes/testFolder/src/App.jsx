//importing the userState function from the react library
import { useState } from "react";

//create a display component

const Display = (props) => {
  return <div>{props.counter}</div>;
};

//create a button component
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

// main component ( entry point of the app)
const App = () => {
  const [counter, setCounter] = useState(0);

  //lets register an event handler function to add the counter
  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  //lets register an event handler function to reset the counter

  const setToZero = () => {
    setCounter(0);
  };

  //lets register an event handler function to sub the counter
  const decreaseByOne = () => setCounter(counter - 1);

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
