import { getThemeProps } from "@mui/system";
import React from "react";
import PageHamburguer from "../header/pageHamburguer";
import PageHeader from "../header/pageHeader";
import Sidebar from "../sidebar/sidebar";

import "./toDoTemplate.scss";

export default function ToDoTemplate(props) {
  return (
    <div className="todo-pages">
      <header>
        <PageHeader />
        <PageHamburguer />
      </header>
      <div className="todo-cntnt">
        <Sidebar />
        <div className="todo-childrens">{props.children}</div>
      </div>
    </div>
  );
}
