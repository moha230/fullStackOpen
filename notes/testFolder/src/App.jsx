//create a Hello component

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} I am {props.age} years old
      </p>
    </div>
  );
};




const App = () => {
  //variable to store data
  const name = "peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      {/*This is a child component and passing props in it */}
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};



export default App;
