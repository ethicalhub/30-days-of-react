startFrom: "31st October, 2023"
courseContent: "Namaste React by Akshay Saini"


Day1: Inception
- Chrome, VS Code
- Create a new folder
- Create index.html file
- Create a basic heading using JS
- Create a basic heading using React

- Browser doesn't understand what's react, so to make our website in React... we need to include React in our website using cdn links

<!-- __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED -->

React-dom file, to enable React (Core React) work on browser... a bridge kinda link to make react work on browsers

- Element will be created by React, but to update it in the DOM, we'll use ReactDOM

- React comes with the philosophy of manipulating the DOM using Javascript, React

- To avoid complex code structure using React.createElement, JSX is introduced

Q1- What is Emmet (in vs code, html)?
Q2- What is CDN?
Q3- What is crossorigin?
Q4- What is ReactJS?  
Q5- What is React and React-dom file? 2 files, why?
Q6- What is root.render() doing? root.render replace everything that's available inside root by things we pass in root.render()...
Q7- Async vs Defer in script tag?

Anything above, below root won't be affected by React and works the same. React will only use, whatever is inside of the root.
React is a library, and can be used partially inside a component or small section of the whole code/project.



// heading is an object, React Element is an Javascript  object
//  ReactElement(Object) => HTML (Browser understands)
// Create 
// <div id="parent"> 
// <div id="chidlren"><h2>Hi, I'm nested tag</h2></div>
// <div id="nested_child">siblings</div>
// </div>