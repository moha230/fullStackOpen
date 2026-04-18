const App = () => {
  //Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
    </div>
  );
};

//create a component for the header
const Header = (props) => {
  return <div>
    <h1>{props.course.name}</h1>
  </div>;
};

//create a component for content
const Content = (props) => {
  return (<div>
    <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
    <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
    <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
  </div>)
}

//create a component for Total

export default App;
