//importing the userState function from the react library 
import {useState} from 'react';

// main component ( entry point of the app)
const App = () => {
  const [counter, setCounter] = useState(0)

  

  setTimeout(()=> setCounter(counter + 1),1000)
  console.log('rendering...', counter)

  return (
    <div>
      {counter}
    </div>
  );
};

export default App;
