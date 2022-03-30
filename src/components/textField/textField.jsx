import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./textField.scss";

export default function TextField(props) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTodo(task);
  };

  const notifyDownload = () =>
    toast.success("Task added sucessfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
        <button className="add" type="submit" onClick={notifyDownload}>
          Save
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
