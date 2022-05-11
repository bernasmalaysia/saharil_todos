import React from "react";
import { Link } from "react-router-dom";

export default function Missing() {
  return (
    <main>
      <h2>Page Not Found</h2>
      <p>Well, that's disappointing.</p>
      <p>
        <Link to="/">Visit Our Hompage!</Link>
      </p>
    </main>
  );
}
