import React, { useState } from "react";

//Css
import "./toDoItem.scss";

//Assets
import Edit from "../../assets/edit.png";
import Right from "../../assets/right.png";
import Wrong from "../../assets/wrong.png";
import { Link } from "react-router-dom";

export default function ToDoItem(props) {
  return (
    <div className={props.completed ? "to-do-item-done" : "to-do-item"}>
      <span>{props.todo}</span>
      <div className="btns">
        <Link className="action-button" to={props.editTodo}>
          <img src={Edit} />
        </Link>
        <button className="action-button" onClick={props.toggleTodo}>
          <img src={Right} />
        </button>
        <button className="action-button" onClick={props.deleteTodo}>
          <img src={Wrong} />
        </button>
      </div>
    </div>
  );
}
