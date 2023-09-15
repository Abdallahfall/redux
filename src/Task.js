import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo } from "./actions";
import { Button } from 'react-bootstrap';

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedDescription.trim()) {
      dispatch(editTodo(todo.id, editedDescription));
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleToggle}
        disabled={isEditing}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span>{todo.description}</span>
      )}
      <Button onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </Button>
    </li>
  );
};

export default Task;
