
# whats a context menu

its a pop-up menu in a graphical user interface used for interaction. It offers a limited set of choices that are available in the current state or context of the operating system or application to which the menu belongs.

Examples:

- right-click menu on desktop
- copy/paste menu
- browser context menu

---

# HTTP GET

The server and the browser communicate with each other using the HTTP protocol.

**HTTP GET** is a request used to fetch data or resources from a server.

Example:

```http
GET /index.html
````

This asks the server to send the page.

**Command + R** refreshes the page in the browser.

---

# part1

## Introduction to React

The easiest way to start using the React library is with a tool called **Vite**.

Vite helps create React projects quickly and gives a fast development server.

---

# b JavaScript

## transpiled what this

The word **transpiled** comes from **transformed** + **compiled**.

Transpiling means converting code from one source language into another similar-level language.

Not machine code, but another human-readable language that computers can run.

Examples:

| Tool               | From             | To             | Used For                             |
| ------------------ | ---------------- | -------------- | ------------------------------------ |
| TypeScript (tsc)   | TypeScript       | JavaScript     | Add types & modern syntax            |
| Babel              | Modern JS (ES6+) | Older JS (ES5) | Make new syntax work in old browsers |
| Sass/SCSS          | Sass             | CSS            | Advanced CSS features                |
| JSX / TSX Compiler | JSX / TSX        | JavaScript     | React components                     |

## why transpile?

* Browser compatibility
* Use modern syntax
* Add developer features like TypeScript
* Convert JSX into normal JavaScript
* Improve developer experience

---

# variables

Ways JavaScript defines variables:

```js
const x = 1
let y = 5
```

## const

`const` creates a variable whose reference cannot be reassigned.

```js
const x = 1
x = 2 // error
```

## let

`let` creates a variable whose value can change.

```js
let y = 5
y = 10
```

---

# arrays

Arrays can be declared with `const`, but their contents can still change.

```js
const arr = [1, 2, 3]

arr.push(4)
console.log(arr)
```

Because `const` protects the variable name, not the internal contents.

---

## Array methods

### iterating

Use `forEach()`:

```js
const numbers = [1, 2, 3]

numbers.forEach(value => {
  console.log(value)
})
```

### adding elements in an array

Use `push()`:

```js
const arr = [1,2]
arr.push(3)
```

In React prefer immutable updates with `concat()`:

```js
const t = [1, -1, 3]

const t2 = t.concat(5)
```

---

## immutable data

**Immutable** means cannot be changed.

In functional programming, data is not modified directly. New versions are created.

Benefits:

* predictable behavior
* easier debugging
* safer updates
* works well with React

---

## map()

`map()` creates a new array by transforming values.

```js
const numbers = [1,2,3]

const doubled = numbers.map(n => n * 2)
```

---

## Array destructuring

```js
const numbers = [10,20,30]

const [first, second, third, ...rest] = numbers
```

---

# Objects

```js
const person = {
  name: "Juma",
  age: 20
}
```

## dot notation

```js
person.name
```

## bracket notation

```js
person["name"]
```

## add properties

```js
person.city = "Tampere"
person["country"] = "Finland"
```

---

# Functions

```js
const add = (a, b) => {
  return a + b
}
```

---

# Object methods and "this"

```js
const person = {
  name: "Juma",
  greet() {
    console.log(this.name)
  }
}
```

`this` refers to the current object.

---

# version of react that contains react hooks

## what is react hooks

Hooks are special functions that let function components use React features.

* `useState`
* `useEffect`
* `useContext`
* `useRef`
* `useMemo`
* `useCallback`
* `useReducer`

---

# C: Component state, event handlers

## what is component

A reusable independent piece of UI.

Usually a JavaScript function returning JSX.

---

## what is state

State is data that can change over time inside a component.

When state changes, React re-renders.

Think of state as memory.

---

## Event handlers

Functions that run after user actions.

```js
<button onClick={handleClick}>Click</button>
```

---

## component helper function

A helper function is a small function used to organize logic.

```js
const App = () => {
  const greet = () => "Hello"

  return <p>{greet()}</p>
}
```

---

## destructuring

Taking values out of arrays or objects into variables.

### object destructuring

```js
const person = {
  name: "Juma",
  age: 20
}

const { name, age } = person
```

### Array destructuring

```js
const numbers = [10,20,30]

const [first, second, third] = numbers
```

---

### auxiliary variables

Temporary helper variables.

```js
const subtotal = price * quantity
const total = subtotal + tax
```

---

### Rerendering the page

So rendering is making or generating a 2d image or animation from a 3d model.

Rerendering is the process where a component updates its UI to reflect changes in state or props after the initial render.

React updates UI when data changes.

Triggered by:

* state changes
* props changes

---

### Stateful components

```js
const [counter, setCounter] = useState(0)
```

* `counter` current value
* `setCounter` update function

Equivalent:

```js
const state = useState(0)

const counter = state[0]
const setCounter = state[1]
```

---

### Event handling flow

```text
Click
↓
Handler runs
↓
setCounter()
↓
State updates
↓
Component re-runs
↓
UI updates
```

---

### Passing state to child components

```js
<App>
  <Child count={counter} />
</App>
```

---

# D: A more complex state, debugging React apps
