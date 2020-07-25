import * as React from "react";
import { todoListFilterState } from "../state/todo";
import { useRecoilState } from "recoil";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value);
  };

  return (
    <div className="mt-2 ml-1">
      <span className="font-semibold">Filter:</span>
      <select
        value={filter}
        onChange={updateFilter}
        data-testid="filter-select"
        className="ml-3"
      >
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default React.memo(TodoListFilters);
