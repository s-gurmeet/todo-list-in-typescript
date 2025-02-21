import { Task } from "../types/types";

export interface TaskItemProps {
  task: Task;
  editTaskId: number | null;
  editTaskText: string;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  deleteTask: (id: number) => void;
  editTask: (id: number, text: string) => void;
  saveTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
}
