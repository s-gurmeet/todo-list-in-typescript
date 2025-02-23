
import React from "react";
import Button from "./Button";
import { BUTTON_TEXT } from "../config/constants";
import { Task } from "../types/task.types";

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  startEditingTask: (id: number, text: string) => void;
  saveTask: () => void;
  editTaskId: number | null;
  editTaskText: string;
  setEditTaskText: (text: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleTaskCompletion, startEditingTask, saveTask, editTaskId, editTaskText, setEditTaskText }) => (
  <li className={`task-item ${task.completed ? "completed" : ""}`}>
    {editTaskId === task.id ? (
      <>
        <input
          type="text"
          value={editTaskText}
          onChange={(e) => setEditTaskText(e.target.value)}
          className="edit-input"
        />
        <Button onClick={saveTask} className="save-task-button">
          {BUTTON_TEXT.SAVE_TASK}
        </Button>
      </>
    ) : (
      <>
        <span className="task-text" onClick={() => toggleTaskCompletion(task.id)}>
          {task.text}
        </span>
        <Button onClick={() => startEditingTask(task.id, task.text)} className="edit-task-button">
          {BUTTON_TEXT.EDIT_TASK}
        </Button>
        <Button onClick={() => deleteTask(task.id)} className="delete-task-button">
          {BUTTON_TEXT.DELETE_TASK}
        </Button>
      </>
    )}
  </li>
);

export default TaskItem;