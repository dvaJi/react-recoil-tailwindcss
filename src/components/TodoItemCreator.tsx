import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState, Todo } from "../state/todo";

let id = 0;
function getId() {
  return id++;
}

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState<Todo[]>(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div className="w-full mt-4">
      <input
        type="text"
        placeholder="What is your plan for today"
        value={inputValue}
        onChange={onChange}
        className="border border-gray-200 shadow-sm rounded-sm px-4 py-2 w-4/5"
      />
      <button className="border border-gray-200 shadow-sm rounded-sm px-4 py-2 float-right" onClick={addItem}>ADD</button>
    </div>
  );
};

export default React.memo(TodoItemCreator);
