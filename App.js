import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
    "h1", 
    {id: "heading", className:"main_heading"}, 
    "Hello World from React")
    // {} is used to pass an attribute


const parents = React.createElement(
    "div",
    {id:'parent'},
    [React.createElement('div',{id:"child", key:"child" }, React.createElement("h2",{}, "Hi, I'm nested tag")), React.createElement("div", {id:"nested_child", key:"sibling" }, "siblings")]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parents)

// heading is an object, React Element is an Javascript  object

//  ReactElement(Object) => HTML (Browser understands)

// Create 
// <div id="parent"> 
// <div id="chidlren"><h2>Hi, I'm nested tag</h2></div>
// <div id="nested_child">siblings</div>
// </div>


// 