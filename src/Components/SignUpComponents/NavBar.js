import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h1 className="zapnav">ZAP</h1>
      </Link>
      <p className="s-u-paragraph">
        Already a member{" "}
        <Link className="herelink" to="/login">
          Sign In Here
        </Link>
      </p>
    </nav>
  );
}
