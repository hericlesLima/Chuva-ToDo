import React from "react";

//Css
import "./addToDo.scss";

//Components
import AddTextField from "../../../components/textField/textField";
import ToDoTemplate from "../../../components/ToDoTemplate/ToDoTemplate";

export default function AddToDo() {
  return (
    <ToDoTemplate>
      <AddTextField label="Title" />
      <AddTextField label="Content" rows="12" />
    </ToDoTemplate>
  );
}
