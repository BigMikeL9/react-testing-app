// Testing Asynchronous code

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Posts from "./Posts";

describe("Posts component Test suite", () => {
  test("renders posts if request succeeds", async () => {
    // ---- 'Arrange'
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
