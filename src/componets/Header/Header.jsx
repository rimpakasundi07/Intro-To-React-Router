import React from "react";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>This is a header</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/laptop">Laptop</Link>
      </nav>
    </div>
  );
};

export default Header;
