
// component function 
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old 
      </p>
    </div>
  )
}




// main component ( entry point of the app) 
const App = () => {
  //Variables inside the App component
  const nimi = "juma";
  const ika = 20;

  return (
    <div>
      <h1>Greetings </h1>
       {/* Passing fixed name and calculated age */}
      <Hello name="maya" age={26+10}/>
      {/* Passing variables as props */}
      <Hello name= {nimi} age={ika}/>
    </div>
  );
};

export default App;
