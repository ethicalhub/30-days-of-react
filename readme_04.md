# Talk is cheap, show me the code - lec04

- how you think about building app? what thought process goes behind the scenes?

- the first thing is to do planning and create a proper structure of the app... before actually start developing it

- what we're going to build, how it looks like, how it should work, etc

----
Plan- 
- name our app
create a basic design or use some already available designs available on Internet

- Header{
    Logo, Links in Navbar
}
- Body {
search bar, 
search button,
restaurant cards {image, title, cuisines, time for delivery, etc}
}
- Footer {
    copyright, important links
}

Once the design is ready, create a general rough planning for what all components will our app have...
- Header Component (Logo Component, Nav items)
- Body Component (Search Component, Restaurant cards container, Restaurant card details)
- Footer Component (
    Copyright message,
    Address, contact, links
)


whenever we need a component, which can be resued... always create a new component


------------------
Props
- how can we use the same component, with different data? by passing props



## Questions
Q1- What is config driven UI?
Q2- What is array.join()?\
Q3- What is optional chaining?
Q4- What is map(), filter(), reduce()?
Q5- Why to need a key, in map function?
- React optimizes it's render cycle,  when there're component at same level they need unique id, but why? if there's no id, react will rerender all those cards,  because react don't know where to add ...  so when React have id, it will only render the changes... Read more about it



UI Layer + Data Layer = a good frontend application
