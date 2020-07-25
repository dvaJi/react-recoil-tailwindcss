import React from "react";
import { useRecoilState } from "recoil";
import { todoListState, Todo } from "../state/todo";

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <li className="flex justify-between items-center mt-3">
      <div
        data-testid="item-wrapper"
        className={`flex items-center ${item.isComplete ? "line-through" : ""}`}
      >
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
          data-testid="toggle-completion"
        />
        <div className="capitalize ml-3 text-sm font-semibold">{item.text}</div>
      </div>
      <div>
        <button onClick={deleteItem}>X</button>
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
