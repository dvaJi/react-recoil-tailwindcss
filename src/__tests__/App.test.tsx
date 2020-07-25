import React from "react";
import { RecoilRoot } from "recoil";
import { render, act, fireEvent } from "@testing-library/react";

import App from "../App";
import { todoListState, Todo } from "../state/todo";

const todo: Todo = {
  id: 1,
  isComplete: false,
  text: "Fix this Test",
};

test("renders", () => {
  const { getByText } = render(
    <RecoilRoot initializeState={(snap) => snap.set(todoListState, [todo])}>
      <App />
    </RecoilRoot>
  );
  const linkElement = getByText(/Todo Application/i);
  expect(linkElement).toBeInTheDocument();
});

test("updates todo item", async () => {
  const { getByTestId } = render(
    <RecoilRoot initializeState={(snap) => snap.set(todoListState, [todo])}>
      <App />
    </RecoilRoot>
  );

  act(() => {
    fireEvent.click(getByTestId(/toggle-completion/i));
  });

  // Assert
  expect(getByTestId(/item-wrapper/i).className).toBe(
    "flex items-center line-through"
  );
});
