import React, { useState } from "react";

import "./textField.scss";

export default function TextField(props) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault();
     props.createTodo(task) 
  }

  return (
    <div className="text-field">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
        autoComplete="off"
          placeholder={props.placeholder}
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
