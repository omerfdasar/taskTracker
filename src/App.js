import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const baseUrl = "http://localhost:5000/tasks";

  // fetching tasks
  const fetchTasks = async () => {
    const { data } = await axios(baseUrl);
    console.log(data);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Adding Task

  const addTask = async (newTask) => {
    const res = await axios.post(baseUrl, newTask);
    console.log(res);
    fetchTasks();
  };

  // Deleting Task

  const deleteTask = async (deletedTaskID) => {
    await axios.delete(`${baseUrl}/${deletedTaskID}`);
    fetchTasks();
  };
  // Toggle Done
  const toggleDone = async (toggleDoneID) => {
    const { data } = await axios.get(`${baseUrl}/${toggleDoneID}`);
    console.log(data);
    const updatedTask = { ...data, isDone: !data.isDone };
    await axios.put(`${baseUrl}/${toggleDoneID}`, updatedTask);
    fetchTasks();
  };

  /* const toggleDone = (toggleDoneID) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneID ? { ...task, isDone: !task.isDone } : task
      )
    );
  }; */
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
