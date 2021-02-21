import React, { useContext } from "react";
import UsersContext from "../utils/UsersContext";
import UserRow from "./UserRow";

//Uses context to map over data and generate a row with the stateless component
const UserRowSetup = () => {
  const { users } = useContext(UsersContext);

  return users.map((item) => (
    <UserRow
      key={item.id}
      name={item.name}
      phone={item.phone}
      email={item.email}
      image={item.image}
    />
  ));
};

export default UserRowSetup;
