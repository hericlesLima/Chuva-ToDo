import React, { useState } from "react";
import ToDoTemplate from "../../../components/ToDoTemplate/ToDoTemplate";

import { useSelector, useDispatch } from "react-redux";

import { editToDo } from "../../../store/actionCreator";

import "./editToDo.scss";

export default function EditToDo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editTask, setEditTask] = useState();

  const update = (id, editedTask) => {
    dispatch(editToDo({ id, editedTask }));
  };

  const id = 1;

  const handleUpdate = (e) => {
    e.prevenetDefault();
    update(id, editTask);
  };

  return (
    <ToDoTemplate>
      <div className="edit-text-field">
        <form className="edit-todo-form" onSubmit={handleUpdate}>
          <input
            autoComplete="off"
            placeholder="Edit your task here ..."
            type="text"
            name="task"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <button className="add" type="submit">
            Save
          </button>
        </form>
      </div>
    </ToDoTemplate>
  );
}
