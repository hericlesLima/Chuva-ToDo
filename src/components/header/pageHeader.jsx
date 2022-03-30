import React from "react";

//Css
import "./pageHeader.scss";

//Router
import { Link } from "react-router-dom";

//Assets
import Logo from "../../assets/logo.png";

export default function PageHeader() {
  const pages = [
    { name: "Home", link: "/" },
    { name: "Todos", link: "/add_new" },
    { name: "Contacts", link: "/contacts" },
  ];

  return (
    <nav className="header">
      <img src={Logo} alt="Logo" />
      <div>
        {pages.map((page) => (
          <Link key={page.name} to={page.link}>
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
