import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BirdList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Type</th>
          <th>Location ID</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.birds.map((bird) => {
          return (
            <tr key={bird.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteBird(bird.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/bird/" + bird.slug}>{bird.type}</Link>
              </td>
              <td>{bird.locationId}</td>
              <td>{bird.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

BirdList.propTypes = {
  deleteBird: PropTypes.func.isRequired,
  birds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      locationId: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BirdList;
