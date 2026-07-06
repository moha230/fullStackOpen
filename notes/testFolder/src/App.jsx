//importing the userState function from the react library
import { useState } from "react";

//create a display component

const Display = ({ counter }) => <div>{counter}</div>;

//create a button component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// main component ( entry point of the app)
const App = () => {
  // lets change the state and store them in single object for both left and right clicks
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });

  //printing in the console
  console.log("rendering current left value", click.left);
  console.log("rendering current right value", click.right);

  // we could write them in seprate functions but no need since i get it 

  return (
    <div>
      {click.left}
      <button
        onClick={() => setClick({ left: click.left + 1, right: click.right })}
      >
        left
      </button>
      <button
        onClick={() => setClick({ right: click.right + 1, left: click.left })}
      >
        right
      </button>
      {click.right}
    </div>
  );
};

export default App;
