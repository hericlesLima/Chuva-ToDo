import { getThemeProps } from "@mui/system";
import React from "react";

import './toDoItemActionButton.scss'

export default function ToDoItemActionButton(props) {
  return (
    <div>
      <button className="action-button">
        <img src={props.src} />
      </button>
    </div>
  );
}
