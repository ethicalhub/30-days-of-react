# lec05 : let's get hooked
- React hooks
- Create a src folder and move App.js into that
- Create a new folder "component" and create new file for each component
- React is fast and efficient in doing DOM manipulation

https://legacy.reactjs.org/docs/faq-structure.html
- Read folder structure
- never ever keep hardcoded data into your component
- don't keep hardcoded url, string into your component

create a utils folder (config, common)
- utils > constant.js 
(small case, because it's not component)
 
 2 types of export, import
 default export/import (only one default export from one file)
 named export/import

 Q1- Can we use default export and named export from one file/component?
 Q2- What is hooks? - 
 Normal JS utility function, given to us by React
 (with some extra powers)
 Q3- What is render, rerender?
 Q4- why do we have 2 element is useState, instead of directly mutating...?
 
 # Two main hooks, useState(), useEffect()
- useState() => super powerful state variables in react 
- useEffect() => 


- Whenever a state variables changes, react re-renders the component... (it'll reload the component)




-------------------
# Important
- React use Reconciliation Algorithm also known as React-fiber

- Creates a virtual dom that is an object representation of actual dom, and virtual dom is just a javascript object


# Diff Algorithm
-> Find out the difference between updated and previous virtual dom and update the DOM

In React 16, ReactFiber came in... 
it's a new way to finding the diff and updating the dom


https://github.com/acdlite/react-fiber-architecture
# React Fiber


----------
React is fast, because React efficiently do dom manipulation because it has virtual dom and use diff algorithm


