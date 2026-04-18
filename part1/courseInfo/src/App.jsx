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
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};

//Create a Total component that takes in an argument named props

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.total[0].exercises +
          props.total[1].exercises +
          props.total[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  //Make the variables into objects and place them into an array
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </div>
  );
};

export default App;
