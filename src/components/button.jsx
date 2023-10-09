const Button = ({ click, name, isActive }) => {
  const buttonClasses = isActive ? "bg-blue-600 text-white" : "";
  return (
    <div
      className={`border-b-2 border-blue-600 px-8 hover:bg-blue-600 hover:text-white duration-300 py-2 cursor-pointer text-xs active:scale-90 ${buttonClasses}`}
      onClick={click}
    >
      {name}
    </div>
  );
};

export default Button;
