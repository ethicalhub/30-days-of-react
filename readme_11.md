# Data is the new oil
Frontend is build up of: UI LAYER, DATA LAYER


- Higher Order Component - we pass a component, and enhance it

- Controlled & Uncontrolled component
 Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.

# Lifting the state up 
- Read docs

# Props Drilling
- What is props drilling?
Prop drilling occurs when a parent component generates its state and passes it down as props to its children components that do not consume the props – instead, they only pass it down to another component that finally consumes it.

# Context API
- create contextfile inside User (similar to Global object , so it can be use in whole application)

import {createContext} from "react"
const UserContext = createContext({
    loggedInUser : "Default User"
})

to use it, import {useContext} from 'react'
const data = useContext(UserContext)

- use it where you need to use the same data at multiple places
- To use useContext in class based component, use it like this 
<UserContext.Consumer>
{(data)=>console.log(data)}
</UserContext.Consumer>

- How to update the context value
Wrap the component, inside <UserContext.Provide value={{loggedInUser:'New value'}}></UserContext.Provider>

Create and Test Nested Context

- Update the value of context, using child component (Pass the setState too in the context)