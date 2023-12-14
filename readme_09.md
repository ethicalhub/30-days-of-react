## Optimizing our app
- clean code
- custom hooks
- single responsibility 

start name with use... while writing custom react hooks, it's not mandatorty but React recommends 

Q1: What is Linters, esLint?


## Chunking or Code Splitting or Lazy Loading?
const Grocery = lazy(()=>import("./components/Grocery")) 

<Suspense fallback={"Load something, if react couldn't find the component..."}><Grocery /> </Suspense>