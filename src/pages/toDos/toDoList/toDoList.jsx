import React from "react";
import ToDoItem from "../../../components/toDoItem/toDoItem";
import ToDoItemActionButton from "../../../components/toDoItem/toDoItemActionButton";
import ToDoTemplate from "../../../components/ToDoTemplate/ToDoTemplate";

export default function Todo() {
  return (
    <div>
      <ToDoTemplate>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoTemplate>
    </div>
  );
}
