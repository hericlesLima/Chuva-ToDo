import React from "react";
import { Link } from "react-router-dom";

//Css
import "./pageHamburguer.css";

export default function PageHamburguer() {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/add_new">
            <li>Add new</li>
          </Link>
          <Link to="/to_do_list">
            <li>To do list</li>
          </Link>
          <Link to="/board">
            <li>Board</li>
          </Link>
          <Link to="/contacts">
            <li>Contacts</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
