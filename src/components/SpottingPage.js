import React, { useState, useEffect } from "react";
import { getBirds } from "../api/birdApi";
import BirdList from "./BirdsList";
import { Link } from "react-router-dom";

function SpottingPage() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    getBirds().then((_birds) => setBirds(_birds));
  }, []);

  return (
    <>
      <h2>Spotting Page</h2>
      <Link className="btn btn-outline-primary" to="/bird">Add Bird</Link>
      <BirdList birds={birds} />
    </>
  );
}

export default SpottingPage;
