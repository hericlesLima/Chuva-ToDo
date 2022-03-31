import { getThemeProps } from "@mui/system";
import React from "react";

import "./toDoItemActionButton.scss";

export default function ToDoItemActionButton(props) {
  return (
    <div>
      <button className="action-button" onClick={props.event}>
        <img src={props.src} />
      </button>
    </div>
  );
}
