import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { Button } from 'react-bootstrap';

const ListTask = () => {
  const [filter, setFilter] = useState("all"); // "all", "done", "notDone"
  const todos = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.isDone;
    if (filter === "notDone") return !todo.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <Button className="my-custom-button" onClick={() => setFilter("all")}>All</Button>
        <Button className="my-custom-button" onClick={() => setFilter("done")}>Done</Button>
        <Button className="my-custom-button" onClick={() => setFilter("notDone")}>Not Done</Button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
