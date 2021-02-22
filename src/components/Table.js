import React from "react";
import UserRowSetup from "./UserRowSetup";

//Component for bootstrap table.
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
