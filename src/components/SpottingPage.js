import React, { useState, useEffect } from "react";
import { getBirds } from "../api/birdApi";
import BirdList from "./BirdsList";

function SpottingPage() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    getBirds().then((_birds) => setBirds(_birds));
  }, []);

  return (
    <>
      <h2>Spotting Page</h2>
      <BirdList birds={birds} />
    </>
  );
}

export default SpottingPage;
