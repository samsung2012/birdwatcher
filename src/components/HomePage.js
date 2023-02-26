import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Bird Watchers</h1>
      <p>Bird watchers information tracker</p>
      <Link to="about" className="btn btn-outline-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
