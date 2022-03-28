import React from "react";

import './homeButton.scss'

import { Link } from "react-router-dom";

export default function HomeButton(props){
    return(
        <Link className='button' to={'/add_new'}>Get Started</Link>
    )
}