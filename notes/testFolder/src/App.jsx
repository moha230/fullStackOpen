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
  // Lets add a state that containing an array that remembers every click that occured.
  const [allClicks, setAll] = useState([]);
  //lets add a state that keeps the total number of buttons pressed in a state
  const [total, setTotal] = useState(0);

  //printing in the console
  console.log("rendering current left value", clicks.left);
  console.log("rendering current right value", clicks.right);
  console.log("rendering current allClicks values", allClicks);
  console.log("rendering current total values", total);
  // we could write them in seprate functions but no need since i get it
  // lets use the spread operator

  return (
    <div>
      {clicks.left}
      <button
        onClick={() => {
          setAll(allClicks.concat("L"));
          setClicks({
            ...clicks,
            left: clicks.left + 1,
          });

          
          setTotal(clicks.left + 1 + clicks.right);
        }}
      >
        left
      </button>
      <button
        onClick={() => {
          setClicks({ ...clicks, right: clicks.right + 1 });

          setAll(allClicks.concat("R"));
          setTotal(clicks.left + clicks.right + 1 );
        }}
      >
        right
      </button>
      {clicks.right}
      <p>{allClicks.join(" ")}</p>
      <p>total {total}</p>
    </div>
  );
};

export default App;
