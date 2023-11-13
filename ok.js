import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="total">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add" onClick={addTask}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className={todo.completed ? "completed" : ""}>
              {index + 1}. {todo.text}
            </span>
            <button className="delete" onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
