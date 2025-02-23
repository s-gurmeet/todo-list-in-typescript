import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types/task.types";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  startEditingTask: (id: number, text: string) => void;
  saveTask: () => void;
  editTaskId: number | null;
  editTaskText: string;
  setEditTaskText: (text: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTaskCompletion, startEditingTask, saveTask, editTaskId, editTaskText, setEditTaskText }) => (
  <ul className="task-list">
    {tasks.length > 0 ? (
      tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          startEditingTask={startEditingTask}
          saveTask={saveTask}
          editTaskId={editTaskId}
          editTaskText={editTaskText}
          setEditTaskText={setEditTaskText}
        />
      ))
    ) : (
      <p className="no-tasks">No tasks yet. Add one! 🚀</p>
    )}
  </ul>
);

export default TaskList;