import React from "react";

//
import './addTodo.scss'

//Components
import ResponsiveAppBar from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";

export default function AddToDo() {
  return (
    <div className="add-todo">
      <header>
        <ResponsiveAppBar />
      </header>
      <Sidebar />
    </div>
  );
}
