import React from "react";

//Css
import "./sidebar.scss";

//Assets
import Add from "../../assets/add.png";
import List from "../../assets/todolist.png";
import Board from "../../assets/board.png";

//Libraries
import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/add_new", src: Add, name: "Add new" },
    { to: "/to_do_list", src: List, name: "To do list" },
    { to: "/board", src: Board, name: "Board" },
  ];

  return (
    <section className="sidebar">
      <div>
        {links.map((link) => (
          <Link key={link.name} to={link.to}>
            <img src={link.src} />
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
