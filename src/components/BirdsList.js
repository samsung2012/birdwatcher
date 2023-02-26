import React from "react";
import PropTypes from "prop-types";

function BirdList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Location ID</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.birds.map((bird) => {
          return (
            <tr key={bird.id}>
              <td>{bird.type}</td>
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
