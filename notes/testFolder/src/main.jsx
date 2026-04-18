import ReactDOM from "react-dom/client";

import App from "./App";

let counter = 1;

const root = ReactDOM.createRoot(document.getElementById("root"));

// create a function that forces rendering of the page

const refresh = () => {
  root.render(<App counter={counter} />);
};


//call the function using set intervals 

setInterval(()=> {
  refresh()
  counter +=1
}, 1000)

