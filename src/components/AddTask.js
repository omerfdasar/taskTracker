import { useState } from "react";
const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTask({ text, day, isDone: false });
    setText("");
    setDay("");
  };
  return (
    <form className="add-form" onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="Add Task"
          required
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          required
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
