const App = () => {
  const course = "Half Stack application development"; //header section
  //content data
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <p>
      <Content  part1={part1} exercises1={exercises1}/>
      </p>
      <p>
      <Content  part2={part2} exercises2={exercises2}/>
      </p>
      <p>
       <Content  part3={part3} exercises3={exercises3}/>
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

//Define Header component and introduce props with the variable name course
//The component receives the props (properties) from its parent App component
// and uses the props.course to display the course name.

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

//Define Content component and should introduce a variable part1,2,3 and exercises1,2,3
//The component will receive the props properties from its parent App component

const Content = (props) => {
  return (
    <>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </>
  );
};

export default App;
