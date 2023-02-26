import React from "react";
import { getBirds } from "../api/birdApi";

class SpottingPage extends React.Component {
  state = {
    birds: [],
  };

  componentDidMount() {
    getBirds().then((birds) => this.setState({ birds: birds }));
  }

  render() {
    return (
      <>
        <h2>Spotting Page</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Location ID</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.birds.map((bird) => {
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
      </>
    );
  }
}

export default SpottingPage;
