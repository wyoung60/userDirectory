import React from "react";

//Context generator to be used with useContext methods
const UsersContext = React.createContext({
  users: [],
  unchangedUserState: [],
});

export default UsersContext;
