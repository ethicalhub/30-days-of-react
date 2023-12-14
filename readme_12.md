# Redux : State management Library
Redux is not mandatory , especially in small, midsize application...

- Redux:
A predictable State container for JS applications

Centralize, Debuggable, Flexible
-React-redux : bridge between react and redux



- Redux-Toolkit:

Redux Store: A very big object kept in a central place and can be accessible from each component of the application
Slices: A small portion of redux store. A slice is a bundled package containing reducer logic and related actions for a specific state section. 


Dispatch Action to call the reducer function and then function modify the cart


- Subscribe to the store, using selector (syncing with the Store)
- Please subscribe to the exact data, because it'll be less efficient


In older version of redux, it was prohibited to directly mutate the state... but now we mutate it only... 
But why?


RTK either mutate the state or return the new state...


step1: Install Redux Toolkit, React-Redux Library
step2: Create a Store
step3: Connect Store to our app
step4: Slice (cart, userslice)
step5: dispatch(action)
step6: useSelector

import {createSlice} from '@redux/toolkit'

const cartSlice = createSlice({
    initialState:{
        items:[]
    },
    name: "cart",
    reducers: {
        addItems: (state, action)=>{
            <!-- mutating the state here -->
            state.items.pushaction.payload)
        }
    }
})

<!-- Export actions reducers and actions -->
export const {addItems} = cartSlice.actions
export default cartSlice.reducers



Q: What is deep copy, and shallow copy?
Q: What is ImmerJS?
Q: What is current(state) in redux toolkit?
Q: What is RTK Query?