import React from 'react'
import ReactDOM from 'react-dom/client'


const title =  (
<h1 id='heading'>
       Title Element
</h1>)
const HeadingComponent = ()=>{
    return (
        <>
    {title}
    <h1 id='heading'>30 days of ReactJS using Component</h1>
    </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)


