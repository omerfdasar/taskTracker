import Task from "./Duty";

const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            toggleDone={toggleDone}
            duty={task}
            deleteTask={deleteTask}
            key={task.id}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
