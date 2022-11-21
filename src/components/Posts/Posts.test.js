// Testing Asynchronous code

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Posts from "./Posts";

describe("Posts component Test suite", () => {
  test("renders posts if request succeeds", async () => {
    // ---- 'Arrange'
    /* ⭐ IMPORTANT  -> 
    
    - Overriding the built-in 'fetch()' component in the 'Posts.js' component with a 'MOCK' function that doesn't actually send a request to our server. (ONLY in the testing code)
    
    - 'fn()' method which is available on the globally available 'jest' object, lets us create a 'mock'/dummy function.  
    - This 'mock' function have additional features we can use than its original function 
    */

    window.fetch = jest.fn();

    // 'mockResolvedValueOnce()' method on the 'mock' function we created, lets us set a value that the 'mock' fetch function should resolve to when ot gets called. So it should resolve to something that is expected in our 'Posts.js' component to render the posts.
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "p1", title: "First Post", body: "LULULULULULL" },
      ],
    });

    // window.fetch.mockRejectedValue(new Error("Async error message"));

    render(<Posts />);

    // ---- 'Act'
    // Dont need to add any fetch functionality here since '<Posts/>' component fetched the data.

    // ---- 'Assert'
    // check if post items were fetched correctly by checking if they were rendered
    // fetching posts from API is asynchronous which means that initially there are no posts until the request is resolved. So we need to use the 'find...' methods

    // ⭐⭐ 'find...' methods  returns a promise. Use if an element will EVENTUALLY be on the screen. 'React testing library' will re-evalutae the screen a couple of times, until the returned promise from 'find...' methods SUCCEEDS.
    // we can set a 'timeout' period option as a third argument in 'find...' methods, which will tell 'React testing library' how long to wait before re-evaluating the returned promise. DEFAULT is 1 second. See docs

    // also use 'await' to wait for the promise to be fulfilled
    const postItemElements = await screen.findAllByRole("listitem");
    expect(postItemElements).not.toHaveLength(0);
    // expect(postItemElements.length).toBeGreaterThan(0);
  });
});
