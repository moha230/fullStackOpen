//importing reactDom which is responsible for connecting react to the browser DOM
import ReactDOM from 'react-dom/client'


// importiing the main app component ( the root of your react app)
import App from './App'

//define a vairiable called counter 
// Normal js variable initialized with value 1 
// This value will be passed into the App component as a prop. 

let counter = 1 


// Step 1: Finds the HTML element with id="root" in index.html
// Step 2: Creates a React root inside that element
// Step 3: Renders the App component inside that root
// Step 4: Passes the variable "counter" into App as a prop
//         so inside App you can access it like: props.counter
ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter} />)

