import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(task.text);
  };

  return (
    <>
    <div className='task-cont'>
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="task-text" onClick={() => onToggle(task.id)}>
          {task.text}
        </span>
      )} <span className="checkmark" onClick={() => onToggle(task.id)}>
        {task.completed && '✔️'}
      </span>
    </div>
    <div className='buttons'>
      
      {isEditing ? (
        <>
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <button className="edit-button" onClick={handleEdit}>Edit</button>
      )}
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
      </div>
      </div>
      </>
  );
};

export default Task;
