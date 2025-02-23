import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";

const App: React.FC = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion, startEditingTask, saveTask, editTaskId, editTaskText, setEditTaskText } = useTasks();

  return (
    <div className="app-container">
      <div className="background-box">
        <Header />
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          startEditingTask={startEditingTask}
          saveTask={saveTask}
          editTaskId={editTaskId}
          editTaskText={editTaskText}
          setEditTaskText={setEditTaskText}
        />
      </div>
    </div>
  );
};

export default App;