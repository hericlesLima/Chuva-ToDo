import React, { useState } from "react";
import ToDoItem from "../../../components/toDoItem/toDoItem";
import ToDoTemplate from "../../../components/ToDoTemplate/ToDoTemplate";

import { useSelector, useDispatch } from "react-redux";
import {
  completeToDo,
  deleteToDo,
  editToDo,
} from "../../../store/actionCreator";
import TextField from "../../../components/textField/textField";

import { Link } from "react-router-dom";

export default function Todo(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [isEditing, setEditing] = useState(false);
  const [editTask, setEditTask] = useState();

  const update = () => {};

  return (
    <div>
      <ToDoTemplate>
        {todos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              todo={todo.task}
              completed={todo.completed}
              toggleTodo={() => dispatch(completeToDo(todo))}
              deleteTodo={() => dispatch(deleteToDo(todo))}
              editTodo={"/edit_to_do"}
            />
          );
        })}
      </ToDoTemplate>
    </div>
  );
}
