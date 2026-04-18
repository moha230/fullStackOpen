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
  );
};

//Create a Content component that takes in an argument named props
const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  );
};

//Create a Total component that takes in an argument named props

const Total = (props) => {
  return (
    <div>
      {" "}
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  //Make the variables into objects
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        exercises1 = {part1.exercises}
        
        part2={part2.name}
        exercises2 = {part2.exercises}
        
        part3={part3.name}
        exercises3 = {part3.exercises}
        
      />
      <Total total = {part1.exercises+ part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
