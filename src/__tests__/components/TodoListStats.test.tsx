import React from "react";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";

import TodoListStats from "../../components/TodoListStats";
import { todoListState, Todo } from "../../state/todo";

const todo: Todo[] = [
  {
    id: 1,
    isComplete: false,
    text: "Fix this Test",
  },
  {
    id: 2,
    isComplete: true,
    text: "Complete new task",
  },
];

test("renders stats", () => {
  const { getByText } = render(
    <RecoilRoot initializeState={(snap) => snap.set(todoListState, todo)}>
      <TodoListStats />
    </RecoilRoot>
  );
  const totalItemsEl = getByText(/Total items/i);
  const itemsCompletedEl = getByText(/Items completed/i);
  const itemsNotCompletedEl = getByText(/Items not completed/i);
  const percentCompletedEl = getByText(/Percent completed/i);

  expect(totalItemsEl.innerHTML).toBe("Total items: 2");
  expect(itemsCompletedEl.innerHTML).toBe("Items completed: 1");
  expect(itemsNotCompletedEl.innerHTML).toBe("Items not completed: 1");
  expect(percentCompletedEl.innerHTML).toBe("Percent completed: 50");
});
