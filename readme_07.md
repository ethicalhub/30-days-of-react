## Finding the path
-  Deep dive in useState and useEffect

## useEffect
- named import from 'react'
- it takes two argument, (callback function, dependency array)

- useEffect basically called after every render of that component (when no dependency array is given)

if no dependency array => call everytime the component render


- if dependency array is empty, useEffect only call on initial render and just once

- if we give dependency, then useEffect is called everytime the dependency changes and always call on initial render

## useState
- some best practices
- never create outside of your component
- try to call these hooks on the top in your functional component (to avoid consistency)


## Routing in React
- npm i react-router-dom (v6)
- Import {createBrowserRouter, RouterProvider} from "react-router-dom" inside app router, to create configuration

- const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <Home />,
        errorElement: <ErrorComponent > (to manage error, or if some error occured)
    },
    {
        path: '/about',
        element : <About />
    }

   
])

 root.render(<RouterProvider router={appRouter}>)


 - React Router dom also gives us access to routeError
 - in the error component, 
 import {useRouteError} from 'react-router-dom'
 - get specific information about the error and show it to the UI

 const err = useRouteError()
 console.log("err", err)


 ## Children route

use <Outlet /> in main layout

- const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout />,
        errorElement: <ErrorComponent > (to manage error, or if some error occured),
        chidren:[
        {
            path:'/home',
            element: <Home />
        },
        {
        path: '/about',
        element : <About />
    }
        ]
    }
])


- {Link} to menu items
- <Link to={"/about"}>
- anchor tag reload the whole page, while Link tag only refresh the component
- that's why we call React as a Single Page Application, we only have single page, and component get replced by other component based on route and logic
- behind the scenes, Link is using anchor tag ... Link is a wrapper of anchor tag


## Two types of routing
- Client side routing
in React we're doing client side routing, no need to fetch/network call for routing

- Server side routing - index.html, about.html, 
it fetches the html after making the network call, reload the whole page (pages are coming from server)


## Dynamic routing
/:id (dynamic part of the path)

- const {id} = useParams()



