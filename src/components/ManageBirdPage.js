import React from "react";

const ManageBirdPage = (props) => {
  return (
    <>
      <h2>Manage Bird</h2>
      {props.match.params.slug}
    </>
  );
};

export default ManageBirdPage;
