# Part 1 - Introduction

# What is a Context Menu?

A **context menu** is a pop-up menu in a graphical user interface (GUI) that appears when you perform an action such as **right-clicking**.

It displays a list of actions that are available for the current object or application.

### Examples

- Right-click menu on the desktop
- Copy/Paste menu
- Browser context menu

---

# HTTP GET

The browser and the server communicate with each other using the **HTTP (Hypertext Transfer Protocol)**.

One of the most common HTTP requests is **GET**.

A **GET request** asks the server to send data or resources to the browser.

Example:

```http
GET /index.html
```

This tells the server:

> "Please send me the `index.html` page."

After receiving the request, the server sends the requested resource back to the browser.

### Refreshing the page

Pressing:

```text
Command + R
```

refreshes the current web page by making another GET request to the server.

---

# Part 1

# Introduction to React

The easiest way to start building React applications is by using **Vite**.

Vite is a modern build tool that:

- Creates React projects quickly
- Starts a fast development server
- Supports Hot Module Replacement (HMR)
- Makes development much faster than older tools

---

# JavaScript

## What does "transpiled" mean?

The word **transpiled** comes from the words:

- **Transformed**
- **Compiled**

Transpiling means converting code from one programming language into another programming language that is at a similar level.

Unlike a compiler, which converts code into machine code, a transpiler converts code into another human-readable language.

### Examples

| Tool | Converts From | Converts To | Purpose |
|------|---------------|-------------|---------|
| TypeScript (`tsc`) | TypeScript | JavaScript | Adds static typing |
| Babel | Modern JavaScript (ES6+) | Older JavaScript (ES5) | Browser compatibility |
| Sass / SCSS | Sass | CSS | Better CSS development |
| JSX Compiler | JSX | JavaScript | Allows React components to run in browsers |

---

## Why do we transpile code?

Transpiling allows developers to:

- Use modern JavaScript features.
- Support older browsers.
- Write TypeScript while still running JavaScript.
- Convert JSX into normal JavaScript.
- Improve the developer experience.

---

# Variables

JavaScript mainly uses two keywords to declare variables:

```js
const x = 1
let y = 5
```

---

## const

`const` creates a variable whose **reference cannot be reassigned**.

```js
const x = 1

x = 2 // Error
```

However, if the value is an object or array, its contents can still change.

---

## let

`let` creates a variable whose value **can change**.

```js
let y = 5

y = 10
```

Use `let` whenever the variable needs to be reassigned.

---

# Arrays

Arrays store multiple values inside a single variable.

Example:

```js
const numbers = [1, 2, 3]
```

Even when an array is declared using `const`, its contents can still change.

```js
const arr = [1, 2, 3]

arr.push(4)

console.log(arr)
```

Output:

```text
[1, 2, 3, 4]
```

This works because `const` prevents the variable from pointing to another array, but it does **not** prevent modifying the array's contents.

---

# Array Methods

## forEach()

`forEach()` loops through every item in an array.

```js
const numbers = [1, 2, 3]

numbers.forEach(number => {
  console.log(number)
})
```

Output:

```text
1
2
3
```

---

## push()

`push()` adds an element to the **end** of an array.

```js
const arr = [1, 2]

arr.push(3)
```

Result:

```text
[1, 2, 3]
```

Although this works in JavaScript, React usually avoids `push()` because it **modifies the original array**.

---

## concat()

`concat()` creates a **new array**.

```js
const numbers = [1, 2, 3]

const newNumbers = numbers.concat(4)
```

Result:

```text
numbers
[1, 2, 3]

newNumbers
[1, 2, 3, 4]
```

The original array remains unchanged.

React prefers `concat()` because React state should be **immutable**.

---

# Immutable Data

**Immutable** means **cannot be changed directly**.

Instead of modifying existing data, we create a new version.

Example:

❌ Modify the original array

```js
arr.push(4)
```

✅ Create a new array

```js
const newArr = arr.concat(4)
```

Benefits of immutable data:

- Easier debugging
- Predictable behavior
- Safer state updates
- Works well with React

---

# map()

`map()` creates a **new array** by transforming every element.

```js
const numbers = [1, 2, 3]

const doubled = numbers.map(number => number * 2)
```

Result:

```text
[2, 4, 6]
```

The original array stays the same.

---

# Array Destructuring

Destructuring lets us extract values from an array into separate variables.

```js
const numbers = [10, 20, 30]

const [first, second, third, ...rest] = numbers
```

Results:

```text
first = 10
second = 20
third = 30

rest = []
```

If the array contains more values:

```js
const numbers = [10, 20, 30, 40, 50]
```

then

```text
rest = [40, 50]
```

---

# Objects

Objects store related data as **key-value pairs**.

Example:

```js
const person = {
  name: "Juma",
  age: 20
}
```

---

## Dot Notation

Access a property using a dot.

```js
person.name
```

Output:

```text
Juma
```

---

## Bracket Notation

Access a property using brackets.

```js
person["name"]
```

Output:

```text
Juma
```

Bracket notation is useful when the property name is stored in a variable.

---

## Adding Properties

Objects can have new properties added.

Using dot notation:

```js
person.city = "Tampere"
```

Using bracket notation:

```js
person["country"] = "Finland"
```

The object becomes:

```js
{
  name: "Juma",
  age: 20,
  city: "Tampere",
  country: "Finland"
}
```

---

# Functions

Functions are reusable blocks of code.

Example:

```js
const add = (a, b) => {
  return a + b
}
```

Calling:

```js
add(2, 3)
```

returns:

```text
5
```

---

# Object Methods and `this`

Objects can contain functions called **methods**.

```js
const person = {
  name: "Juma",

  greet() {
    console.log(this.name)
  }
}
```

Output:

```text
Juma
```

### What does `this` mean?

Inside an object method, `this` refers to **the current object**.

In this example:

```js
this.name
```

is equivalent to:

```js
person.name
```

because `this` refers to the `person` object.

# Part 2 - React Fundamentals

# React Hooks

## What are React Hooks?

Hooks are **special functions** that allow function components to use React features such as:

- State
- Side effects
- Context
- References
- Performance optimizations

Before Hooks were introduced, these features were only available in class components.

Some common Hooks include:

- `useState`
- `useEffect`
- `useContext`
- `useRef`
- `useMemo`
- `useCallback`
- `useReducer`

The first Hook you'll learn is **useState**.

---

# Components

## What is a Component?

A **component** is an independent, reusable piece of the user interface (UI).

Think of a component as a building block.

Large applications are built by combining many small components together.

Most React components are JavaScript functions that return JSX.

Example:

```jsx
const Welcome = () => {
  return <h1>Hello!</h1>
}
```

Whenever the component is used:

```jsx
<Welcome />
```

React renders:

```text
Hello!
```

---

## Why use components?

Components make code:

- Reusable
- Easier to read
- Easier to maintain
- Easier to test

Instead of writing the same code multiple times, you create one component and reuse it.

---

# State

## What is State?

State is **data that belongs to a component** and can change over time.

Think of state as the component's memory.

Whenever state changes, React automatically re-renders the component so the UI stays synchronized with the data.

Example:

```jsx
const [counter, setCounter] = useState(0)
```

Here:

- `counter` → the current state value
- `setCounter` → the function used to update the state

---

## How `useState()` works

```jsx
const [counter, setCounter] = useState(0)
```

React creates a piece of memory for this component.

Initially:

```text
counter = 0
```

The `useState()` function returns an array containing two values:

```js
[
  currentState,
  setterFunction
]
```

Equivalent code:

```jsx
const state = useState(0)

const counter = state[0]
const setCounter = state[1]
```

React remembers this state between renders.

---

## What is a Setter?

A **setter** is a function that updates state.

Example:

```jsx
const [count, setCount] = useState(0)
```

| Variable | Purpose |
|----------|---------|
| `count` | Current state value |
| `setCount` | Updates the state |

Example:

```jsx
setCount(5)
```

React updates the state to:

```text
count = 5
```

After updating the state, React re-renders the component.

---

# Event Handlers

## What is an Event Handler?

An **event handler** is a function that React calls when a user interacts with the application.

Examples of user actions include:

- Clicking a button
- Typing into an input
- Submitting a form
- Moving the mouse

Example:

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

When the button is clicked:

1. React calls `handleClick()`.
2. The function runs.
3. State may change.
4. React re-renders the component.

---

## React's Event System

React does not use the browser's native event system directly.

Instead, React wraps browser events inside a **Synthetic Event**.

### Why?

Because it provides:

- Consistent behavior across browsers
- Better performance
- Easier event handling

---

# Event Handling Flow

When a button is clicked:

```text
User clicks button
        ↓
React receives the event
        ↓
Event handler runs
        ↓
State updates
        ↓
React re-renders the component
        ↓
UI updates
```

---

# An Event Handler is Just a Function

An event handler is simply a normal JavaScript function.

Example:

```jsx
const handleClick = () => {
  console.log("Button clicked")
}
```

React calls this function whenever the event occurs.

---

## Real-life Analogy

Imagine a doorbell.

Doorbell → Button

Someone presses it → Event

The bell rings → Event handler

The bell only rings after someone presses the button.

Similarly, React only calls the event handler after the user performs an action.

---

# Passing an Event Handler

An event handler must be either:

- A function reference
- An inline function

NOT a function call.

---

## Function Reference

```jsx
<button onClick={handleClick}>
```

Here:

`handleClick` is **not executed immediately**.

React stores a reference to the function and calls it later when the button is clicked.

---

## Inline Function

```jsx
<button onClick={() => handleClick()}>
```

This is also valid.

Here you're passing a new function to React.

When React calls that function, it then calls `handleClick()`.

---

## Incorrect

```jsx
<button onClick={handleClick()}>
```

This executes the function immediately while rendering the component.

The event handler will not wait for the button click.

---

# Helper Functions

A helper function is a small function used to simplify or organize logic.

Example:

```jsx
const App = () => {

  const greet = () => {
    return "Hello"
  }

  return (
    <p>{greet()}</p>
  )
}
```

Helper functions make components easier to read.

---

# Destructuring

Destructuring extracts values from arrays or objects into variables.

---

## Object Destructuring

```js
const person = {
  name: "Juma",
  age: 20
}

const { name, age } = person
```

Result:

```text
name = "Juma"

age = 20
```

---

## Array Destructuring

```js
const numbers = [10, 20, 30]

const [first, second, third] = numbers
```

Result:

```text
first = 10

second = 20

third = 30
```

React uses array destructuring heavily with Hooks.

Example:

```jsx
const [count, setCount] = useState(0)
```

---

# Auxiliary Variables

Auxiliary variables are temporary variables that make code easier to understand.

Example:

```js
const subtotal = price * quantity

const total = subtotal + tax
```

Instead of writing one long calculation, we split it into smaller pieces.

---

# Passing State to Child Components

React applications are made of many components.

Instead of every component having its own copy of the same data, the parent component usually owns the state.

Example:

```jsx
<App>
  <Display count={counter} />
</App>
```

Here:

- `App` owns the state.
- `Display` receives the state through props.

---

# Lifting State Up

Sometimes multiple components need the same data.

Instead of duplicating state, React recommends moving the state to their closest common parent.

This is called:

> **Lifting State Up**

Example:

```text
        App
       /   \
 Display   Button
```

The `App` component owns the state.

Both child components receive the data through props.

Benefits:

- One source of truth
- Easier state management
- Less duplicated data

---

# Re-rendering

## What is Rendering?

Rendering is the process of creating the user interface.

When React renders a component, it executes the component function and produces the JSX that appears on the page.

---

## What is Re-rendering?

Re-rendering happens when React executes the component again because the data has changed.

React re-renders whenever:

- State changes
- Props change

Example:

```jsx
setCounter(counter + 1)
```

React updates the state and then renders the component again.

The UI automatically reflects the new state.

---

## Summary

State changes trigger re-renders.

The flow is:

```text
State changes
      ↓
React re-renders the component
      ↓
UI updates automatically
```

One of React's biggest advantages is that you only update the data.

React updates the user interface for you.

# Part 3 - Complex State, Arrays, and Asynchronous State

# Complex State

## What is Complex State?

State is not limited to storing a single value.

React allows us to store:

- Numbers
- Strings
- Booleans
- Objects
- Arrays

A component can have **multiple independent pieces of state**.

Example:

```jsx
const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
```

Here we have two independent pieces of state.

Updating `left` does **not** affect `right`.

Each piece of state has its own setter function.

---

## What is a Setter?

A **setter** is the function React gives us to update a piece of state.

Example:

```jsx
const [count, setCount] = useState(0)
```

| Variable | Purpose |
|----------|---------|
| `count` | Holds the current state value |
| `setCount` | Updates the state |

When we call:

```jsx
setCount(5)
```

React updates the state to:

```text
count = 5
```

and re-renders the component.

---

# State Can Store Any Data Type

A component's state can store any JavaScript data type.

Examples:

Number

```jsx
const [count, setCount] = useState(0)
```

String

```jsx
const [name, setName] = useState("John")
```

Boolean

```jsx
const [loggedIn, setLoggedIn] = useState(false)
```

Array

```jsx
const [notes, setNotes] = useState([])
```

Object

```jsx
const [clicks, setClicks] = useState({
  left: 0,
  right: 0
})
```

---

# Object State

Instead of storing:

```jsx
const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
```

we can group related values into one object.

```jsx
const [clicks, setClicks] = useState({
  left: 0,
  right: 0
})
```

The object contains two properties.

```text
clicks
│
├── left
└── right
```

---

# Updating Object State

React **replaces the entire object** when updating state.

Example:

```jsx
setClicks({
  left: clicks.left + 1
})
```

The new object becomes:

```jsx
{
  left: 1
}
```

Notice that the `right` property disappears.

This happens because React replaces the entire object instead of merging it automatically.

To preserve the other properties we must include them ourselves.

```jsx
setClicks({
  left: clicks.left + 1,
  right: clicks.right
})
```

Result:

```jsx
{
  left: 1,
  right: 0
}
```

---

# Object Spread Operator

## What is the Spread Operator?

The spread operator (`...`) copies all properties from one object into a new object.

Example:

```jsx
const person = {
  name: "John",
  age: 25
}

const copy = {
  ...person
}
```

Result:

```jsx
{
  name: "John",
  age: 25
}
```

The original object is unchanged.

---

## Why is the Spread Operator Used?

The spread operator allows us to:

- Copy an object
- Add new properties
- Update existing properties
- Preserve the existing data

Instead of writing:

```jsx
setClicks({
  left: clicks.left + 1,
  right: clicks.right
})
```

we can simply write:

```jsx
setClicks({
  ...clicks,
  left: clicks.left + 1
})
```

---

## How the Spread Operator Works

Suppose the state is:

```jsx
{
  left: 2,
  right: 5
}
```

First:

```jsx
...clicks
```

copies everything.

```jsx
{
  left: 2,
  right: 5
}
```

Then:

```jsx
left: clicks.left + 1
```

replaces the copied value.

Final result:

```jsx
{
  left: 3,
  right: 5
}
```

---

## Order Matters

The spread operator should come **before** the properties you want to update.

Correct:

```jsx
setClicks({
  ...clicks,
  left: clicks.left + 1
})
```

Incorrect:

```jsx
setClicks({
  left: clicks.left + 1,
  ...clicks
})
```

Why?

JavaScript reads objects from top to bottom.

In the incorrect example:

1. `left` becomes `3`.
2. `...clicks` copies the old object.
3. The old value overwrites the new one.

Always remember:

> **Copy first. Update second.**

---

# Handling Arrays in React State

Arrays are used when we want to store a **list of items**.

Examples:

- Notes
- Users
- Todo items
- Click history

Example:

```jsx
const [allClicks, setAllClicks] = useState([])
```

Initially:

```text
[]
```

After clicking Left:

```text
["L"]
```

After clicking Right:

```text
["L", "R"]
```

The array stores the **history of every click**.

---

# Updating Array State

React state should be immutable.

Instead of modifying the existing array, we create a new one.

Example:

```jsx
setAllClicks(allClicks.concat("L"))
```

---

## Breaking It Down

```jsx
setAllClicks(allClicks.concat("L"))
```

### `setAllClicks`

This is the **state setter function**.

Its job is to update the `allClicks` state.

---

### `concat()`

`concat()` is a built-in JavaScript array method.

It creates a **new array**.

Suppose:

```jsx
allClicks = ["L", "R"]
```

Then:

```jsx
allClicks.concat("L")
```

returns:

```jsx
["L", "R", "L"]
```

The original array is not modified.

---

# Why Not Use push()?

This changes the original array.

```jsx
allClicks.push("L")
```

React prefers immutable updates.

Instead use:

```jsx
setAllClicks(allClicks.concat("L"))
```

---

# Asynchronous State Updates

## What is Synchronous?

Synchronous means:

- Start a task.
- Finish the task.
- Start the next task.

Everything happens one after another.

---

## What is Asynchronous?

Asynchronous means:

- Start a task.
- Continue executing other code.
- Finish the original task later.

---

# Asynchronous State Updates in React

React state updates are asynchronous.

When we write:

```jsx
setCount(count + 1)
```

React does **not** update the state immediately.

Instead, React schedules the update and performs it before the next render.

---

## Example

Current state:

```text
count = 0
```

We call:

```jsx
setCount(count + 1)

console.log(count)
```

Console output:

```text
0
```

Why?

Because React has **scheduled** the update.

The state has not changed yet.

---

## After React Re-renders

React updates the state.

```text
count = 1
```

Then the component re-renders.

Now the UI displays:

```text
1
```

---

# Why Does React Update State Asynchronously?

React waits until the current event handler finishes running.

Then it:

- Applies all state updates.
- Performs one re-render.

Benefits:

- Better performance
- Fewer unnecessary renders
- More efficient applications

---

## Key Idea

Calling:

```jsx
setState(newValue)
```

does **not** mean:

> "The state changed immediately."

It means:

> "React has been asked to update the state. The new value will be available during the next render."

---

# Derived State

Sometimes one value can be calculated from another.

Example:

```jsx
const total = left + right
```

There is no need to store `total` as state because it can always be calculated from `left` and `right`.

React recommends avoiding duplicated state whenever possible.

This keeps your application simpler and prevents bugs caused by state getting out of sync.

# Part 4 - Conditional Rendering, Debugging, and React Best Practices

# Conditional Rendering

## What is Conditional Rendering?

**Conditional rendering** means displaying different UI depending on whether a condition is true or false.

React decides **what should appear on the page** based on the application's current state or props.

It works similarly to an `if` statement in JavaScript.

Example:

```js
if (isLoggedIn) {
  console.log("Welcome!")
} else {
  console.log("Please log in.")
}
```

Instead of printing to the console, React decides what to display on the screen.

---

## Why Do We Use Conditional Rendering?

Sometimes there is no data to display.

For example, suppose we have an array that stores every button click.

Initially:

```js
allClicks = []
```

The array is empty.

Instead of displaying an empty history, we display a helpful message.

```text
The app is used by pressing the buttons.
```

After the user clicks some buttons:

```js
allClicks = ["L", "R", "L"]
```

React now displays:

```text
Button press history:
L R L
```

The displayed content changes depending on whether the array is empty.

---

# The History Component

Instead of writing all the conditional logic inside the `App` component, we create a separate component.

```jsx
const History = ({ allClicks }) => {

  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons.
      </div>
    )
  }

  return (
    <div>
      Button press history: {allClicks.join(" ")}
    </div>
  )
}
```

---

## How It Works

React checks:

```js
allClicks.length === 0
```

### If the array is empty

```js
[]
```

React returns:

```text
The app is used by pressing the buttons.
```

---

### If the array contains values

```js
["L", "R", "L"]
```

React skips the first `return` statement and renders:

```text
Button press history:
L R L
```

---

## Why Create Another Component?

Instead of making the `App` component responsible for everything, we divide the application into smaller components.

```jsx
<App>
    <History allClicks={allClicks} />
</App>
```

The `App` component provides the data.

The `History` component decides what to display.

This follows one of React's main principles:

> Every component should have a single responsibility.

Benefits:

- Cleaner code
- Easier maintenance
- Better reusability
- Easier debugging

---

# Conditional Rendering Summary

Conditional rendering means showing different UI depending on a condition.

In this example:

```js
allClicks.length === 0
```

If the condition is **true**, React displays:

```text
The app is used by pressing the buttons.
```

If the condition is **false**, React displays:

```text
Button press history:
L R L
```

Common ways to perform conditional rendering:

- `if` statements
- Ternary operator (`condition ? value1 : value2`)
- Logical AND (`condition && value`)

---

# Debugging React Applications

## What is Debugging?

Debugging is the process of finding and fixing errors in your code.

Most React bugs happen because:

- State has an unexpected value.
- Props contain incorrect data.
- Event handlers are not called correctly.
- Components are not re-rendering as expected.

---

# Using console.log()

One of the easiest ways to debug React is by printing values to the console.

Example:

```jsx
console.log(clicks)
```

or

```jsx
console.log(allClicks)
```

This helps you understand the current state of your application.

---

## Where Should console.log() Go?

The most common place is inside the component.

```jsx
const App = () => {

    console.log(clicks)
    console.log(allClicks)

    return (
        ...
    )
}
```

Because React runs the component every time it renders, the console always shows the latest state.

---

## Logging Inside Event Handlers

Sometimes it is useful to log values inside an event handler.

```jsx
const handleClick = () => {

    console.log("Button clicked")

    setCount(count + 1)
}
```

This helps confirm that the event handler is being executed.

---

# React Developer Tools

React Developer Tools is a browser extension.

It allows you to inspect:

- Components
- Props
- State
- Component hierarchy

This makes debugging React applications much easier.

---

# Common Beginner Mistakes

## 1. Calling an Event Handler Instead of Passing It

❌ Wrong

```jsx
<button onClick={handleClick()}>
```

✅ Correct

```jsx
<button onClick={handleClick}>
```

or

```jsx
<button onClick={() => handleClick()}>
```

---

## 2. Modifying State Directly

❌ Wrong

```jsx
allClicks.push("L")
```

✅ Correct

```jsx
setAllClicks(allClicks.concat("L"))
```

Always create a new object or array instead of modifying the existing one.

---

## 3. Forgetting to Copy an Object

❌ Wrong

```jsx
setClicks({
    left: clicks.left + 1
})
```

The `right` property disappears.

✅ Correct

```jsx
setClicks({
    ...clicks,
    left: clicks.left + 1
})
```

---

## 4. Expecting State to Update Immediately

```jsx
setCount(count + 1)

console.log(count)
```

The console prints the **old value**.

Why?

Because React updates state asynchronously.

The new state is available on the next render.

---

## 5.conditional rendering 

Displaying a different UI depening on a condition. 
