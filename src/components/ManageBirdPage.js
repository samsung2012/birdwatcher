import React, { useState, useEffect } from "react";
import BirdForm from "./BirdForm";
import birdStore from "../stores/birdStore";
import { toast } from "react-toastify";
import * as birdActions from "../actions/birdActions";

const ManageBirdPage = (props) => {
  const [errors, setErrors] = useState({});
  const [birds, setBirds] = useState(birdStore.getBirds());
  const [bird, setBird] = useState({
    id: null,
    slug: "",
    type: "",
    locationId: null,
    time: "",
  });

  useEffect(() => {
    birdStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (birds.length === 0) {
      birdActions.loadBirds();
    } else if (slug) {
      setBird(birdStore.getBirdBySlug(slug));
    }
    return () => birdStore.removeChangeListener(onChange);
  }, [birds.length, props.match.params.slug]);

  function onChange() {
    setBirds(birdStore.getBirds());
  }

  function handleChange({ target }) {
    setBird({ ...bird, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};

    if (!bird.type) _errors.type = "Type field is required";
    if (!bird.locationId) _errors.locationId = "Location field is required";
    if (!bird.time) _errors.time = "Time field is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    birdActions.saveBird(bird).then(() => {
      props.history.push("/spotting");
      toast.success("Bird saved");
    });
  }

  return (
    <>
      <h2>Manage Bird</h2>
      <BirdForm
        errors={errors}
        bird={bird}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageBirdPage;
