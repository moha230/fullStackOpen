const App = () => {
  const course = "Half Stack application development"; //header section

  //content data  //changing it into an object
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
      <Part part1={part1} part2={part2} part3={part3} />
      <Total exercises1 = {part1} exercises2 = {part2} exercises3 = {part3}/>
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

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
    </div>
  );
};


const Total = (props) => {
return (
  <div>
    <p>The number of exercise {props.exercises1.exercises + props.exercises2.exercises + props.exercises3.exercises}</p>
  </div>
)
}
export default App;
