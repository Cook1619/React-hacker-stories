import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import App, { list } from "./App";

// CLeans up to avoid memory leaks
afterEach(cleanup);

test("renders a heading", () => {
  render(<App />);
  screen.getByText("My Hacker Stories");
});

for (let i = 0; i < list.length; i++) {
  test("list should have properties ( title, url, author, num_comments,points,objectID)", () => {
    expect(list[i]).toHaveProperty("title");
    expect(list[i]).toHaveProperty("url");
    expect(list[i]).toHaveProperty("author");
    expect(list[i]).toHaveProperty("num_comments");
    expect(list[i]).toHaveProperty("points");
    expect(list[i]).toHaveProperty("objectID");
  });
}
