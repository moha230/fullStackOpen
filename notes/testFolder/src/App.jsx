// component called Hello
const Hello = (props) => {
  // lets use destructuring becouse props is an object lets not forget that 
 const {name , age} = props

  // helper function to calculate the year somone is born has been separated in its own function,
  // lets refactore the helper function by removing the const yearNow and props.name and return statement and curly brackets.
  const boneYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        {/*pass the props name into the desturing brackets*/}
        Hello {name}, you are {age} years old
      </p>
      <p>So you probably born in {boneYear()}</p>
    </div>
  );
};

// main component ( entry point of the app)
const App = (props) => {
  
  //destructuring the props object and creating a counter 
  const {counter} = props 

  return (
    <div>
      {counter}
    </div>
  );
};

export default App;
