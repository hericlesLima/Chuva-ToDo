import React from "react";

//Css
import "./addToDo.scss";

//Components
import ToDoTemplate from "../../../components/ToDoTemplate/ToDoTemplate";
import TextField from "../../../components/textField/textField";

//Redux
import { createToDo } from "../../../store/actionCreator";
import { useDispatch } from "react-redux";

export default function AddToDo() {
  const dispatch = useDispatch();

  const create = (newTodo) => {
    dispatch(createToDo(newTodo));
  };

  return (
    <ToDoTemplate>
      <TextField createTodo={create} placeholder="Add your task here ..." />
    </ToDoTemplate>
  );
}
