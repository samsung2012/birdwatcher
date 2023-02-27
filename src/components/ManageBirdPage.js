import React, { useState, useEffect } from "react";
import BirdForm from "./BirdForm";
import * as birdApi from "../api/birdApi";
import { toast } from "react-toastify";

const ManageBirdPage = (props) => {
  const [errors, setErrors] = useState({});
  const [bird, setBird] = useState({
    id: null,
    slug: "",
    type: "",
    locationId: null,
    time: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      birdApi.getBirdBySlug(slug).then((_bird) => setBird(_bird));
    }
  }, [props.match.params.slug]);

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
    birdApi.saveBird(bird).then(() => {
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
