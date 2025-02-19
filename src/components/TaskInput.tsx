import React from "react";
import Button from "./Button";
import { BUTTON_TEXT, PLACEHOLDER_TEXT } from "../constants";

interface TaskInputProps {
  newTask: string;
  setNewTask: (text: string) => void;
  addTask: () => void;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const TaskInput: React.FC<TaskInputProps> = ({ newTask, setNewTask, addTask, toggleDarkMode, isDarkMode }) => {
  return (
    <div className="task-input-section">
      <input
        type="text"
        placeholder={PLACEHOLDER_TEXT.TASK_INPUT}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="task-input"
      />
      <Button onClick={addTask} className="add-task-button">
        {BUTTON_TEXT.ADD_TASK}
      </Button>
      <Button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? BUTTON_TEXT.LIGHT_MODE : BUTTON_TEXT.DARK_MODE}
      </Button>
    </div>
  );
};

export default TaskInput;
