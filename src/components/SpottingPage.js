import React, { useState, useEffect } from "react";
import birdStore from "../stores/birdStore";
import BirdList from "./BirdsList";
import { Link } from "react-router-dom";
import { loadBirds, deleteBird } from "../actions/birdActions";

function SpottingPage() {
  const [birds, setBirds] = useState(birdStore.getBirds());

  useEffect(() => {
    birdStore.addChangeListener(onChange);
    if (birdStore.getBirds().length === 0) loadBirds();
    return () => birdStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setBirds(birdStore.getBirds());
  }

  return (
    <>
      <h2>Spotting Page</h2>
      <Link className="btn btn-outline-primary" to="/bird">
        Add Bird
      </Link>
      <BirdList birds={birds} deleteBird={deleteBird} />
    </>
  );
}

export default SpottingPage;
