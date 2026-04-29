// component called Hello
const Hello = (props) => {
  // define variables for the props
  const name = props.name;
  const age = props.age;

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
const App = () => {
  //Variables inside the App component
  const nimi = "juma";
  const ika = 50;

  return (
    <div>
      <h1>Greetings </h1>
      {/* Passing variables as props */}
      <Hello name={nimi} age={ika} />
    </div>
  );
};

export default App;
