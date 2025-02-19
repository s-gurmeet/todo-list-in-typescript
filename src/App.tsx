import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState<string>("");

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const addTask = (): void => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, text: string): void => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  const saveTask = (id: number): void => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: editTaskText.trim() } : task)));
    setEditTaskId(null);
    setEditTaskText("");
  };

  const toggleTaskCompletion = (id: number): void => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
      <div className="background-box">
        <Header />
        <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <TaskList tasks={tasks} editTaskId={editTaskId} editTaskText={editTaskText} setEditTaskText={setEditTaskText} deleteTask={deleteTask} editTask={editTask} saveTask={saveTask} toggleTaskCompletion={toggleTaskCompletion} />
      </div>
    </div>
  );
};

export default App;
