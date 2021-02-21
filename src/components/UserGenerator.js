import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UsersContext from "../utils/UsersContext";
import UserRowSetup from "./UserRowSetup";

const UserGenerator = () => {
  const [usersState, setUsersState] = useState({
    users: [],
  });
  //Use effect to pull initial data set
  useEffect(() => {
    //Calls API.js to get data once data is recieved sorts and sets User state.
    API.userData().then((res) => {
      const data = res.data.results;
      let userID = 0;
      const usersArray = data.map((item) => {
        userID++;
        return {
          id: userID,
          name: `${item.name.first} ${item.name.last}`,
          phone: item.phone,
          email: item.email,
          image: item.picture.thumbnail,
        };
      });

      setUsersState({
        ...usersState,
        users: usersArray,
      });
    });
  }, []);

  return (
    <UsersContext.Provider value={usersState}>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            <UserRowSetup />
          </tbody>
        </table>
      </div>
    </UsersContext.Provider>
  );
};

export default UserGenerator;
