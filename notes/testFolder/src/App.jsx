
//create a component that shows this data

const Hello = ({name, age}) => {
  //destructring the props object 
  
  return (
    <div>
      <p>
        Hello {name} your age is  {age}
      </p>
    </div>
  )
}







const App = () => {
  //variables of data 
  const name = "peter";
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age}/>
      
    </div>
  )
};

export default App;
