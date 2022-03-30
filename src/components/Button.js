const Button = ({ color, text, toggleShow }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={toggleShow}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
