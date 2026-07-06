//importing the userState function from the react library
import { useState } from "react";

//create a display component

const Display = ({ counter }) => <div>{counter}</div>;

//create a button component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// main component ( entry point of the app)
const App = () => {
  // lets change the state and store them in single object for both left and right clicks
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  //printing in the console
  console.log("rendering current left value", clicks.left);
  console.log("rendering current right value", clicks.right);

  // we could write them in seprate functions but no need since i get it 
  // lets use the spread operator 

  return (
    <div>
      {clicks.left}
      <button
        onClick={() => setClicks({...clicks, left: clicks.left + 1})}
      >
        left
      </button>
      <button
        onClick={() => setClicks({ ...clicks,right: clicks.right + 1})}
      >
        right
      </button>
      {clicks.right}
    </div>
  );
};

export default App;
