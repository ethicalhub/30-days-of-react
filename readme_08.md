## Let's get Classy
- Class based components

---
- A class based is a javascript class, and it has a render method which return a piece of JSX

 
# code
class User extends React.Component{
    render(){
        return JSX
    }
}


Q1- What is React.Component?
- It is a class inside React Package, our class is inheriting some function from it.

Q2- how to pass props in class based component?
- constructor, and the constructor function have props...

Q3- why do we have to write super(props)?
Q4- When the constructor function called?
Q5- Why do we call api calls inside componentDidMount?



 
constructir(props){
    super(props) 
    console.log(props)
} 
--- this.props.name

# create state variable in class based component
- it's created whenever we create an instance of a class
- this.state ={
    count:0;
    count2: 1;
}
{this.state.count}

- Never update state variable directly, instead use...
this.setState({
    count: this.state.count +!,
})

# LifeCycle method
- Mounting the component on the webpage : first of all constructor is called, then render, then componentDidMount 
- componentDidMount of parent will call only after the child is rendered properly


# React Lifecycle method diagram
- When the component is mounted, it's mounted in two phases
- 1. Render phases: Pure and has no side effects. Maybe paused, aborted or restarted by React 
- 2. Commit phases: Can work with dom, run side effects, schedule updates

Mounting: 
constructor => render => react updates DOM & refs => componentDidMount


-   every child, component goes through same lifecycle
- we can make componentDidMount async

Updating:
render => react updates DOM & refs => componentDidUpdate

Unmounting
compontentWillUnmount()