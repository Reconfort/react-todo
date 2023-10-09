import Icons from "./icons";
import { FaEdit, FaTrash } from "react-icons/fa";

const todoItem = ({ todo, index, onDelete }) => {
  const backgroundColorClass =
    todo.frequency === "day"
      ? "border-blue-400"
      : todo.frequency === "week"
      ? "border-green-400"
      : todo.frequency === "month"
      ? "border-gray-400"
      : "border-red-400";
  return (
    <div className={`flex gap-2 mt-2 border-b-2 ${backgroundColorClass}`}>
      <span className={`bg-white w-12 h-12 flex justify-center items-center`}>
        {index + 1}
      </span>
      <input className="w-full flex items-center px-4" value={todo.text} />
      <Icons icon={<FaEdit />} color="blue" />
      <Icons icon={<FaTrash />} color="red" click={() => onDelete(index)} />
    </div>
  );
};

export default todoItem;
