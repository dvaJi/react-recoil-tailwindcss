import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./state/todo";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";

function App() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div className="bg-gray-200 text-gray-800 flex items-center justify-center h-screen">
      <div className="container px-3 max-w-md mx-auto">
        <div className="bg-white rounded shadow px-4 py-4">
          <div className="title font-bold text-lg">Todo Application</div>
          <TodoListFilters />
          <TodoItemCreator />
          <ul className="todo-list mt-4">
            {todoList.map((todoItem) => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
          </ul>
        </div>
        <TodoListStats />
      </div>
    </div>
  );
}

export default App;
