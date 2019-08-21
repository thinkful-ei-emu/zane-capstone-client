import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/LandingPage.css";

export default function MyInventorySection() {
  return (
    <section className="my-inventory-section">
      <Link to="/inventory/1">My inventory</Link>
    </section>
  );
}
