import React from "react";
import { Link } from "react-router-dom";

export default function SignUpSection() {
  return (
    <section className="signup-section">
      <Link to="/signup">Signup</Link>
      <Link className="loginlink" to="/login">
        Login
      </Link>
    </section>
  );
}
