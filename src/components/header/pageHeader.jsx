import React from "react";

import "./pageHeader.scss";

import { Link } from "react-router-dom";

import Logo from '../../assets/logo.png'

export default function PageHeader() {
  const pages = [
    { name: "Home", link: "/" },
    { name: "Todos", link: "/add_new" },
  ];

  return (
    <nav className="header">
      <img src={Logo} alt="Logo" />
      <div>
        {pages.map((page) => (
          <Link key={page.name} to={page.link}>{page.name}</Link>
        ))}
      </div>
    </nav>
  );
}
