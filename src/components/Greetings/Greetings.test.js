// -------------------------------
// ---- Writing a Test ----

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

/* ⭐⭐ When writing a test we typically want to do THREE things (Three A's):

      1. FIRST, we want to 'Arrange'  ->  which means that we want to render the component that we want to test.    
                    [We can also do additional setup work if it required, like setup the test data, test conditions, and test environment]

      2. SECOND, we want to 'Act'  ->  which means that we want to DO the thing that we want to actually test.
                                            For example if we want to simulate a button click, then we need to get that button from the DOM and then click it from our test code. 
                    [Run logic that should be tested. ie: execute function]

      3. THIRD (last), we want to 'Assert' the results  ->  which means that we want have a look at the output thats visible in the browser, for example, and then see if that matches our expectation.
                    [compare execution results with expected results]
*/
// -------------------------------

// Creating a 'Test Suite' using the 'describe()' function
// -- Side Note: When naming Test Suites and Tests, use names that would form full descriptive sentences when combined, ie: 'Greeting Component Test Suite [Test Suite name], renders Hello World as a text [test name]'
describe("Greeting Component Test Suite", () => {
  test("renders 'Hello World' as a text", () => {
    // ---- First step   ->   'Arrange'

    // Side note 📝: 'render()' function renders the '<Greetings/>' components along with any Custom Child components it might have as children. ie: it render the entire <Greetings/>' component tree.
    render(<Greetings />);

    // ---- Second step   ->   'Act'
    // ... do nothing since we only want to check if an element was rendered, not when something changes onClick for instance

    // ---- Third step   ->   'Assert'

    /* ⭐⭐⭐ Three types of methods we can use on 'screen' object are to get elements we want to test in Virtual DOM:
                          [Main difference between them is when these functions throw error and if they return a promise or not]
                  - 'get...' methods   ->   WILL throw an Error if an element is NOT found. 
                  - 'query...' methods   ->   WONT throw an error if an element is not found.
                  - 'find...' methods   ->   will return a promise. Use if an element will EVENTUALLY be on the screen.
        */
    // SIDE NOTE 📝:  'getByText()' looks for an EXACT match by default so if element is rendered with 'Hello world!'  then test will fail since text casing doesn't match and there is an exclamation mark.
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  //  ----------------------
  // ANOTHER test for the 'Greetings.js' file.
  test("renders 'Greetings There!! 😁' text, if the button was NOT clicked", () => {
    // ---- 'Arrange'
    render(<Greetings />);

    // ---- 'Act'

    // ---- 'Assert'
    const descriptionElement = screen.getByText("Greetings There!!", {
      exact: false,
    });
    expect(descriptionElement).toBeInTheDocument();
  });

  //  ----------------------
  // Another Test
  test("renders 'Greeting description was UPDATED' text, if button WAS clicked", () => {
    // ---- 'Arrange'
    render(<Greetings />);

    // ---- 'Act'
    const buttonElement = screen.getByRole("button");

    // 'userEvent' is an Object provided to us by '"@testing-library/user-event'
    // It lets us trigger userEvents in the virtual screen. ie: lets us simulate a button click, for instance.

    userEvent.click(buttonElement);

    // ---- 'Assert'
    const descriptionText = screen.getByText(
      "Greeting description was UPDATED",
      { exact: false }
    );
    expect(descriptionText).toBeInTheDocument();
  });

  //  ----------------------
  // Another Test
  test("check if 'Greetings There!! 😁' description text is NOT in document, once we click the button", () => {
    // ---- 'Arrange'
    render(<Greetings />);

    // ---- 'Act'
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // ---- 'Assert'
    // Remember 'query...' methods dont throw an error if the element is not found. Returns 'null' if element is not found.
    const removedDescriptionElement = screen.queryByText(
      "Greetings There!! 😁",
      {
        exact: false,
      }
    );

    expect(removedDescriptionElement).not.toBeInTheDocument();
    // expect(removedDescriptionElement).toBeNull();
  });
});
