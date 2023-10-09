import { useState } from "react";
import Image from "../public/asset/Rectangle1.jpg";

import "./App.css";
import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, frequency) => {
    setTodos([...todos, { text, frequency }]);
  };
  return (
    <div className="flex">
      <img src={Image} alt="image" className="w-3/12 h-screen fixed top-0" />
      <div className="w-screen bg-white p-20 pl-[30%]">
        <h1 className="text-6xl font-bold w-2/4 mt-20 bg-white">
          Make a <span className="text-blue-600">better</span> plan for your
          life
        </h1>
        <p className="mt-4 text-lg font-light w-2/4 mt-12">
          Whoever you are , Whatever you are looking for, we have the perfect
          place for you
        </p>

        {/* Todo form */}
        <TodoForm addTodo={addTodo} />

        {/* Todo list */}
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
