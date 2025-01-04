import React, { useState } from "react";
import ReactDOM from "react-dom";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

 
  const addTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  
  const toggleCompletion = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

 
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul style={{ marginTop: "20px", listStyleType: "none", padding: "0" }}>
        {tasks.length === 0 ? (
          <p>No tasks yet!</p>
        ) : (
          tasks.map((t, index) => (
            <li
              key={index}
              style={{
                textAlign: "left",
                marginBottom: "10px",
                textDecoration: t.completed ? "line-through" : "none",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                onClick={() => toggleCompletion(index)}
                style={{ cursor: "pointer", flex: "1" }}
              >
                {t.text}
              </span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

 
ReactDOM.render(<TodoList />, document.getElementById("root"));
