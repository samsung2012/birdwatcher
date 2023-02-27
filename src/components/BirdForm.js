import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function BirdForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="type"
        label="Type"
        onChange={props.onChange}
        name="type"
        value={props.bird.type}
        error={props.errors.type}
      />

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <div className="field">
          <select
            id="location"
            name="locationId"
            onChange={props.onChange}
            value={props.bird.locationId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">USA</option>
            <option value="2">Canada</option>
            <option value="3">Mexico</option>
          </select>
        </div>
        {props.errors.locationId && (
          <div className="alert alert-danger">{props.errors.locationId}</div>
        )}
      </div>

      <TextInput
        id="time"
        label="Time"
        name="time"
        onChange={props.onChange}
        value={props.bird.time}
        error={props.errors.time}
      />

      <input type="submit" value="Save" className="btn btn-outline-primary" />
    </form>
  );
}

BirdForm.propTypes = {
  bird: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default BirdForm;
