import React from "react";

//
import "./addToDo.scss";

//Components
import AddTextField from "../../../components/textField/textField";
import ResponsiveAppBar from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import PageHeader from "../../../components/header/pageHeader";
import ToDoTemplate from "../../../components/ToDoTemplate/ToDoTemplate";

export default function AddToDo() {
  return (
    <ToDoTemplate>
      <AddTextField label="Title" />
      <AddTextField label="Content" rows="4" />
    </ToDoTemplate>
  );
}
