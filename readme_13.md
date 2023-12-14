# Testing
- how to write testcases in our application?
- Types of testing?


As a developer, we can do...
- Manual Testing
- Writing the test cases, to test automatically


1. Unit Testing 
- Test react component in isolation

2. Integrating Testing
- Testing the integration of components

3. End to end testing
- Test whole application and user journey


-------------------------

# Unit Testing
First library for using Testing
- React Testing Library (it uses JEST)
npm i @testing-library/react
It already exists in CRA

Q1: What is JEST?
 
---------------------------


test("Description of the test", ()=>{
    render <Contact />
    const inputBox = screen.getByRole("textbox")

    <!-- Assertion -->
    expect(inputBox).toBeInTheDocument()
})


to Group multiple test cases:
describe("Contact us test page vase", ()=>{
    test....
})

you can also write "test" as "it"

it("Description of the test", ()=>{
    render <Contact />
    const inputBox = screen.getByRole("textbox")

    <!-- Assertion -->
    expect(inputBox).toBeInTheDocument()
})


- Wraps the test component with the redux provider, so it'll understand the useSelector... and other features of Redux
- Also provide the context of react dom to the component..


- Use mock data, if props is required



## Integration Test
- 