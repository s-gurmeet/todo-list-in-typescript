import { useState, useCallback } from "react";
import { Task } from "../types/task.types";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState<string>("");

  const addTask = useCallback((text: string): void => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text, completed: false }]);
  }, []);

  const deleteTask = useCallback((id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const toggleTaskCompletion = useCallback((id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }, []);

  const startEditingTask = useCallback((id: number, text: string): void => {
    setEditTaskId(id);
    setEditTaskText(text);
  }, []);

  const saveTask = useCallback((): void => {
    if (editTaskId !== null && editTaskText.trim()) {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === editTaskId ? { ...task, text: editTaskText.trim() } : task))
      );
      setEditTaskId(null);
      setEditTaskText("");
    }
  }, [editTaskId, editTaskText]);

  return { tasks, addTask, deleteTask, toggleTaskCompletion, startEditingTask, saveTask, editTaskId, editTaskText, setEditTaskText };
};

export default useTasks;