import Button from "./Button";

const Header = ({ title, showAddTask, toggleShow }) => {
  const handleClick = () => {
    console.log("clickeeeeeeed");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        toggleShow={toggleShow}
        handleClick={handleClick}
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
