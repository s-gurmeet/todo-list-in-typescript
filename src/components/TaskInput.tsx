
import React, { useState } from "react";
import Button from "./Button";
import { BUTTON_TEXT, PLACEHOLDER_TEXT } from "../config/constants";

interface TaskInputProps {
  addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask.trim());
      setNewTask("");
    }
  };

  return (
    <div className="task-input-section">
      <input
        type="text"
        placeholder={PLACEHOLDER_TEXT.TASK_INPUT}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="task-input"
      />
      <Button onClick={handleAddTask} className="add-task-button">
        {BUTTON_TEXT.ADD_TASK}
      </Button>
    </div>
  );
};

export default TaskInput;