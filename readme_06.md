# Exploring the World
- Monolith and Microservice Architecture
- Why world is moving toward microservice architecture?

In microservices architecture, we've different service for different jobs
- Auth Service, UI service, Sending notification service, etc... separately
- All these small applications form a big app (by talking to each other)
- Separation of concerns and single responsibility principal (where each service is responsible for their own work)
- You can have each services write in any/different languages


# How do these services interact with each other?
UI talk to backend, backend talk to DB, notification, etc...
- Each service run on their own ports (on different port, we can deploy different services)
- To interact each other, they call to each other


# How can we dynamically fetch the API
 - Two approaches to connect the API

 first=>
 Loads => API => Render 
rendering will wait until the data from API is fetched

 second => (we're going to use this, better UX)
 Loads => Render (with shimmer UI) => API
 rendering first, then api call, and as soon as we receive the data, we'll quickly re render the data.


# useEffect Hook
Q1- What's useEffect Hook?
useEffect(()=>{}, [])
two argument, a callback function and dependency array

it'll call after the first render is finished (if dependency array is empty)



Q2- Difference between parameters and arguments
Q3- What's CORS policy?
Browser won't allow to call from different origin
Q4- What's conditional rendering?
Rendering based on condition

Q5- Why do we even need State variables ( useState)?



--- fetch will return the promise
--- use async await
await -  waiting for promise to resolve


Show a loader, until the data fetched
- Is showing a spinner good way? No
- shimmer UI


# Shimmer UI
Learn about Shimmer UI, 
and put it instead of putting the loader

Latest Approach
- create a Shimmer.js file
- create a functional component and create a UI


After setState called,
it'll rerender the whole component, not just the changes.. after comparing the virtual doms... it will only update the changes in html

Q6- If we define the useState using constant, then how are we still able to update the value?
- because when react rerendering, it will consider it as a new variable...



## Search functionality
filter the restaurant cards and update the UI
the value of input is tied to the state variable and that's why we need to write... onChange() handler and update the search text (state variable, using setSearchText)

- convert searching name into smaller case, before comparing and check...

- create filtered restaurant (a new state variable) to not affect the whole data

=== so search on main data, and display the filtered === set filtered data, exactly as main data (after calling the api)

res.data.name.toLowerCase().included(searchText.toLowerCase())


--------

## Important
Whenever state variables update, react triggers a reconciliation cycle (re-render the component)

====
Slow coding is very underrated
(questioning everything you learn)
