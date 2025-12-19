whats a context menu 

its a pop up menu in a grahical user interface used for interaction 
It offers a limited set of choices that are available in the current state of context of the operating system or application to which the menu belongs. 

# HTTP GET

her server and the broweser communicate with each other using HTTP protocal 

command - R to refresh the page 


# part1

## Introduction to React

The react library easy way to start is by using the tool called vite 


 # b JavaScript

 transpiled what this 


 The word tanspiled comes from transformed and compiled 

 Transpiling means converting code from ones source language to another similar level language not to machine code buut to another humand readbale language that a  computer can run. 


  | Tool                 | From             | To             | Used For                             |
| -------------------- | ---------------- | -------------- | ------------------------------------ |
| **TypeScript (tsc)** | TypeScript       | JavaScript     | Add types & modern syntax            |
| **Babel**            | Modern JS (ES6+) | Older JS (ES5) | Make new syntax work in old browsers |
| **Sass/SCSS**        | Sass             | CSS            | Advanced CSS features                |
| **TSX/JSX compiler** | JSX/TSX          | JS             | React components                     |


why transpile?

# variables 

ways in which javascript defines variables 

One way is using const . But it does not define a variable but defines a constant which the value cant be changed 

```js 
const x = 1
let y = 5 


```

# arrays

In arrays we can use const to define the array but the content of the array can be changed. 

Why did JavaScript do it this way?
Consistency with objects
Arrays are objects in JS. Objects have always been mutable by default. Making const freeze them would break tons of code.
Separation of concerns
const protects the name → object link (no accidental reassignment),
but it deliberately does not change the object’s mutability policy.
Performance & ergonomics
Cloning arrays/objects on every change would be costly and noisy (const would become awkward to use).
Everyday JS code often mutates arrays (push/pop/splice); keeping that behavior familiar mattered.
Backwards compatibility
ES6 introduced let/const into a huge ecosystem. Changing object/array mutability semantics would have been a breaking change.

## Array methods 

### iterating 

if you want to iterating through the array we use the foreach method

```js 

value => {
  console.log(value)
}

```

### adding elements in an array 

we use the method push  

One characteristic of the functional programming paradigm is the use of immutable data structures

Functional programing treats data like facts once something happend or created you dont rewrite it again need to create new versions.

In short:
In functional programming, data is never changed.
Instead, you create new versions when you need to update something.
This keeps your programs predictable, safe, and easy to reason about.


`The word immutable` 

prefix: im means not 
root: mature means to change 

So immutable means not changeable cannot be changed 


so in react its preferable to use the method concat which creates a new array  with the added item . it ensure the original array is unchanged.

```js
const t = [1, -1, 3]

const t2 = t.concat(5)  // creates new array

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

```

Other method inlcude map which can create a new array and can change something into a different value 
So the map method is used a lot in react 

It can also be used to assigne to variables

```js
const number = [10,20,30]

const [first, second, third, ...rest] = numbers

console.log(first,second,third )

```

# Objects

we define object by using Object literals and objects can store any values 

we can refreence the object values by using dotnotation  or using square brackets. 
You can also add properties to an object on the fly by either using dot notation or brackets:

# Functions 

Done 

# Object methods and "this"

version of react that contains react hooks 

what is react hooks :

This are special functions in react that let function components hook into react features such as state , lifecycle , context without writing a class:

`useState` -> manage state ( data that changes)
`useEffect` -> handle side effects (fetch data, timers etc)
`useConetex`-> access gloabl data via react context 
`useRef` -> keep mutable values that dont triger re-ender
`useMemo, useCallback` -> perfomance optimization
`useReducer` -> manage complex static logic  

 # C: Component state, event handlers

 what is it `component`: reusable , independent piece of a UI that describes how a part of the interface should look and behave.

 conceptually a component in react is a javascript function or class that returns JSX 

 There are functional components which use react hooks.

 what is a `state `: in simple terms state is data that cane change over time in your component.

 react uses this data to render what data in the screen . when the state changes react automatically renders the component to show the new data. 

 we can think of a state as a memory of the component its like a box that holds information for a specific component.


 ### Component state:

 Is the internal data that that belongs to that specifce component which determines how that component will behave or on what will be displayed.


 ### Evenet hanlders 

 This are functions that handle what happens after a user actions 

 This are function that are triggered when a specific event happens in your react app when a user clicks a button. 


 ### helper functions 

 This are small reusable function that perfoms a specifice ask to help another piece of code. 
 Think of it as assistant that takes care of a small details.

 ### destructuring 

We can assigne the props of an object to the parameter of the child component and using distructruing 

distrcutruin helps us extract value in an object or array into other variables in shorter cleaner way 

### Page re-rendering

is when the components update the user interface when data changes without reloading the entire page 
react only renders a page or re renders a page when it detects that data changes . so when props / states couse re render. 


### Statefull components 

const [counter, setCounter] = useState(0) creates a statefull variable that reacts remberes and re-enders the UI when it changes 

[ currentValue, updateFunction ] === [ counter, setCounter ]


The square brackets are array distructuring in js 

This 

```js 
const [ counter, setCounter ] = useState(0);
```
is the same as this 
```js
const state = useState(0);
const counter = state[0];
const setCounter = state[1];
```

* The counter represents the current state value 
* which starts from zero this comes from reacts internal memory 
* its job is to service re-renders 
* each time react renders the component , it injects the latest value inside the counter value  

##### setCounter

* its a function 
* store the new value 
* triggers a re-render 

### Event handling

Event handling = registering a function that runs automaticaaly when an event occurs. 

```vbnet
Event source → Event → Handler function
```
What really happens in React
<button onClick={() => setCounter(counter + 1)}>

Step-by-step:

React stores your function in memory

Browser detects click

Browser sends event to React

React finds which component owns the event

React calls your function

setCounter updates state

React re-renders component

Your function is just a callback.

Click
 ↓
Event handler
 ↓
setCounter()
 ↓
State updated in heap
 ↓
Component function re-runs
 ↓
UI updates


### Passing state - to child components

done 