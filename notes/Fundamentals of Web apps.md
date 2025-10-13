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






