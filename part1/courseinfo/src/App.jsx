const App = () => {
  const course = "Half Stack application development"; //header section

  //content data  //changing it into an object and lets place the object into an array removed const= part1 part2 and part3
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
      <Total parts= {parts} />
    </div>
  );
};

//Define Header component and introduce props with the property name course
//The component receives the props (properties) from its parent App component
// and uses the props.course to display the course name.

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

//create a component for content

const Content = (props) => {
  return <div>
    <p>{props.parts[0].name} {props.parts[0].exercises}</p>
    <p>{props.parts[1].name} {props.parts[1].exercises}</p>
    <p>{props.parts[2].name} {props.parts[2].exercises}</p>
  </div>;
};

//create a component for Total 

const Total = (props) => {
  return (<div>
    <p>Total number of exercises {props.parts[0].exercises + props.parts[1].exercises+props.parts[2].exercises}</p>
  </div>)
}

export default App;
