import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import App from "./App";

// CLeans up to avoid memory leaks
afterEach(cleanup);

test("renders a heading", () => {
  render(<App />);
  screen.getByText("My Hacker Stories");
});

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

for (let i = 0; i < list.length; i++) {
  test("list should have properties ( title, url, author, num_comments, points, objectID )", () => {
    expect(list[i]).toHaveProperty("title");
    expect(list[i]).toHaveProperty("url");
    expect(list[i]).toHaveProperty("author");
    expect(list[i]).toHaveProperty("num_comments");
    expect(list[i]).toHaveProperty("points");
    expect(list[i]).toHaveProperty("objectID");
  });
}
