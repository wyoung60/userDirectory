import React from "react";
import UserRowSetup from "./UserRowSetup";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={props.onClick}>
            Name
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        <UserRowSetup />
      </tbody>
    </table>
  );
};

export default Table;
