import React from "react";

import "./toDoItem.scss";
import ToDoItemActionButton from "./toDoItemActionButton";

//Assets
import Edit from "../../assets/edit.png"
import Right from "../../assets/right.png"
import Wrong from "../../assets/wrong.png"

export default function ToDoItem() {
  return (
    <div className="to-do-item">
      <span>Water the plants</span>
      <div className="btns">
        <ToDoItemActionButton src={Edit}/>
        <ToDoItemActionButton src={Right}/>
        <ToDoItemActionButton src={Wrong}/>
      </div>
    </div>
  );
}
