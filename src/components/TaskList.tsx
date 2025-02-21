import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../App";
import { MESSAGES } from "../constants"; 

interface TaskListProps {
  tasks: Task[];
  editTaskId: number | null;
  editTaskText: string;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  deleteTask: (id: number) => void;
  editTask: (id: number, text: string) => void;
  saveTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  editTaskId,
  editTaskText,
  setEditTaskText,
  deleteTask,
  editTask,
  saveTask,
  toggleTaskCompletion,
}) => {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTaskId={editTaskId}
            editTaskText={editTaskText}
            setEditTaskText={setEditTaskText}
            deleteTask={deleteTask}
            editTask={editTask}
            saveTask={saveTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))
      ) : (
        <p className="no-tasks">{MESSAGES.NO_TASKS}</p>
      )}
    </ul>
  );
};

export default TaskList;
