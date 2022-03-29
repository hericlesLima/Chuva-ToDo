import React from "react";

import './textField.scss'

export default function TextField(props) {
    return(
        <div className="text-field">
            <input placeholder={props.placeholder} type="text" />
        </div>
    )
}