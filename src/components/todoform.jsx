import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [frequency, setFrequency] = useState("day");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text, frequency);
      setText("");
    }
  };
  return (
    <form
      className="flex w-full p-1 gap-2 mt-4 sticky top-4 bg-white"
      onSubmit={handleSubmit}
    >
      <select
        name=""
        id=""
        className="bg-white w-[20%] p-4 border-b-2 border-blue-600 rounded-md shadow-none"
        onChange={(e) => setFrequency(e.target.value)}
        value={frequency}
      >
        <option value="day">Daily</option>
        <option value="week">Weekly</option>
        <option value="month">Monthly</option>
        <option value="year">Year</option>
      </select>
      <input
        type="text"
        className="bg-slate-10 bg-white w-[68%] p-4 border-b-2 border-blue-600 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="submit"
        value="Add task"
        className="bg-blue-600 text -white w-[12%] p-4 text-white active:scale-90 duration-300"
      />
    </form>
  );
};

export default TodoForm;
