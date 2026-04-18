



//Create Header component that takes in an argument named props
//props is an object that contain all data passed into the component
const Header = (props) => {
  return (
    /*JSX creating a div and h1 tag and insert js values inside JSX*/
    <div>
      
      <h1>{props.course}</h1>
    </div>
  );
};

//create a Part component

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

//Create a Content component that takes in an argument named props
const Content = (props) => {
  return (
    <div>
     <Part name={props.part1} exercises={props.exercises1}/>
     <Part name={props.part2} exercises={props.exercises2}/>
     <Part name={props.part3} exercises={props.exercises3}/>
    </div>
  );
};



//Create a Total component that takes in an argument named props

const Total = (props) => {
  return (
     <div> <p>Number of exercises {props.total}</p></div>
  )
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      {/*
      the course name is the variable name 
      we assign it a value which is course which is defined on top with data 
      we insert the variable in {} 
      pass the course variable name into the component */}

      <Header course={course} />
      <Content 
      part1= {part1} exercises1={exercises1}
      part2= {part2} exercises2= {exercises2}
      part3= {part3} exercises3 = {exercises3}
      />
      <Total  total = {exercises1 + exercises2 + exercises3}/>
    </div>
  );
};

export default App;
