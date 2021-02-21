import React from "react";

//Stateless component to generate table rows
const UserRow = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>
        <img src={props.image}></img>
      </td>
    </tr>
  );
};

export default UserRow;
