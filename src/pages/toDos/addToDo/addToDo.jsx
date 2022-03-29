import React from "react";

//Css
import "./addToDo.scss";

//Components
import ToDoTemplate from "../../../components/ToDoTemplate/ToDoTemplate";
import TextField from "../../../components/textField/textField";

export default function AddToDo() {
  return (
    <ToDoTemplate>
      <TextField placeholder="Title"/>
      <TextField placeholder="Content"/>
      <div className="todo-btns">
        <button className="add" type="submit">Add to do</button>
        <button className="cancel" type="submit">Cancel</button>
      </div>
    </ToDoTemplate>
  );
}
