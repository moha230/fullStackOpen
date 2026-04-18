// we import the user state function
// This helps the react component have memory

import { useState } from "react";

//intialize app as our root component acts as container for the whole application
const App = () => {
  //

  const [counter, setCounter] = useState(0);

  //function to add the number of plus
  const plus = () => {
    setCounter(counter + 1);
  };

  // function to reset the counter
  const zero = () => {
    setCounter(0);
  };

  //function to decrement 

  const minus = () => {
    setCounter(counter -1)
  }

  console.log("rendering...", counter);

  return (
    <div>
      <button onClick={zero}>zero</button>
      <button onClick={plus}>Plus</button>
      {counter}
      <button onClick={minus}>minus</button>
    </div>
  );
};

export default App;
