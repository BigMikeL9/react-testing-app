import { render, screen } from "@testing-library/react";
import App from "./App";

// This file contains testing code.
/*
  - 'test()'  function takes in two arguments. 
  - FIRST argument is a description of the test 
      (up to us, can be anything. It helps us identify this test in the testing output)

  - SECOND argument is an anonymous function which contains the actual testing code.

*/
test("renders learn react link", () => {
  /* 
      - 'render()' function is provided to us by the 'testing-library/react' library

      - which renders the component it receives as an argument in our simulated/virtual environment created by the 'testing-library/react' library.
  */
  render(<App />);

  /* 
      - get a hold of an element rendered by the '<App/>' component using the     TEXT that is rendered inside of it.

      - so here we are looking for an element with text of 'learn react'. '/learn react/i' => the 'i' means ignore caps, so in a case INSENSITIVE way.
      
      - '/learn react/i' is a 🌟 REGULAR expression 🌟
  */
  const linkElement = screen.getByText(/learn react/i);

  /* 
      - checks if that element in is the document, ie: if it was rendered in the document.
      
      - This test will FAIL if the element is NOT found.
  */
  expect(linkElement).toBeInTheDocument();
});

// -------------------------------
// ---- Running Tests ----

/*  
    1. in the terminal run this script  -->  'npm test'

    2. then type 'a' which will let Jest look for ALL files in our App that end with '.test.js', and then run ALL the test that are defined in there, with the 'test()' function.

*/

// By default, 'npm test' script watches our files and reruns the tests whenever we save changes in any file in our App.
// -------------------------------
