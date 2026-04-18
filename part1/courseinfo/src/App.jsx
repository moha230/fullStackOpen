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
      {/* Pass the entire course object to Header Content Total*/}
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

//create a component for the header
const Header = (props) => {
  // Access 'course.name' inside props to display the course title
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

//create a component for content
const Content = (props) => {
//Manually access each element in the parts array index 0,1,2

  return (
    <div>
      <p>
        {props.course.parts[0].name} {props.course.parts[0].exercises}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exercises}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exercises}
      </p>
    </div>
  );
};

//create a component for Total

const Total = (props) => {

  // Access each exerciese count using dot notation and sum them togther 
  return (
    <div>
      <p>
        Total number of courses{" "}
        {props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </p>
    </div>
  );
};

export default App;
