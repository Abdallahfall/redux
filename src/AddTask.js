import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";
import { Button } from 'react-bootstrap';

const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (description.trim()) {
      const id = Date.now();
      dispatch(addTodo(id, description));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        className="my-custom-input"
        type="text"
        placeholder="Add a new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button className="my-custom-button" onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default AddTask;