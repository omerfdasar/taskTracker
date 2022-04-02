import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const baseUrl = "http://localhost:5000/tasks";

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(baseUrl);
      const data = await res.json();

      console.log(data);
    };
    fetchTasks();
  }, []);

  // fetching tasks

  // Deleting Task
  const deleteTask = (deletedTaskID) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskID));
  };
  // Adding Task
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };
  const toggleDone = (toggleDoneID) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneID ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  // SHOWING INPUT
  const toggleShow = () => {
    setShowAddTask(!showAddTask);
  };
  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <h2 style={{ textAlign: "center" }}>No Task to Show</h2>
      )}
    </div>
  );
}

export default App;
