import { useState } from "react";
import TodoItem from "./todoItem";
import Button from "./button";

const TodoList = ({ todos }) => {
  const [filter, setFilter] = useState("all");
  
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true; // Show all todos
    } else {
      return todo.frequency === filter; // Show todos matching the selected filter
    }
  });
  
  const [todoList, setTodoList] = useState(todos);

  const deleteTodo = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos.splice(index, 1);
    setTodoList(updatedTodos);
  };
  return (
    <div>
      {filteredTodos.length === 0 ? (
        <div className="bg-blue-100 flex p-12 justify-center items-center mt-4">
          <p>Nothing here!!</p>
        </div>
      ) : (
        <div className="w-full bg-white p-2 mt-4">
          <div className="bg-white flex gap-2 sticky top-[80px] p-4">
            <Button
              click={() => setFilter("all")}
              name="All"
              isActive={filter === "all"}
            />
            <Button
              click={() => setFilter("day")}
              name="Day"
              isActive={filter === "day"}
            />
            <Button
              click={() => setFilter("week")}
              name="Week"
              isActive={filter === "week"}
            />
            <Button
              click={() => setFilter("month")}
              name="Month"
              isActive={filter === "month"}
            />
            <Button
              click={() => setFilter("year")}
              name="Year"
              isActive={filter === "year"}
            />
          </div>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
