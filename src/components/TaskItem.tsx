import React from "react";
import Button from "./Button";
import { BUTTON_TEXT } from "../constants";
import { TaskItemProps } from "../types/task.types"; 

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  editTaskId,
  editTaskText,
  setEditTaskText,
  deleteTask,
  editTask,
  saveTask,
  toggleTaskCompletion,
}) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {editTaskId === task.id ? (
        <>
          <input
            type="text"
            value={editTaskText}
            onChange={(e) => setEditTaskText(e.target.value)}
            className="edit-input"
          />
          <Button onClick={() => saveTask(task.id)} className="save-task-button">
            {BUTTON_TEXT.SAVE_TASK}
          </Button>
        </>
      ) : (
        <>
          <span className="task-text" onClick={() => toggleTaskCompletion(task.id)}>
            {task.text}
          </span>
          <Button onClick={() => editTask(task.id, task.text)} className="edit-task-button">
            {BUTTON_TEXT.EDIT_TASK}
          </Button>
          <Button onClick={() => deleteTask(task.id)} className="delete-task-button">
            {BUTTON_TEXT.DELETE_TASK}
          </Button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
