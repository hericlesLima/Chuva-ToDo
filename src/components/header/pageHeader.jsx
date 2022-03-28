import React from "react";

import "./pageHeader.scss";

import { Link } from "react-router-dom";

export default function PageHeader() {
  const pages = [
    { name: "Home", link: "/" },
    { name: "Todos", link: "/add_new" },
    { name: "Contacts", link: "/contacts" },
  ];

  return (
    <nav className="header">
      {pages.map((page) => (
        <Link to={page.link}>{page.name}</Link>
      ))}
    </nav>
  );
}
