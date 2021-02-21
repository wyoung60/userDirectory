import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UsersContext from "../utils/UsersContext";
import UserRowSetup from "./UserRowSetup";

const UserGenerator = () => {
  const [usersState, setUsersState] = useState({
    users: [],
    unchangedUserState: [],
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
        unchangedUserState: usersArray,
      });
    });
  }, []);

  const sortClick = () => {
    const sortedState = usersState.users.sort(function (a, b) {
      var firstName = a.name.toUpperCase();
      var secondName = b.name.toUpperCase();
      if (firstName < secondName) {
        return -1;
      } else if (firstName > secondName) {
        return 1;
      } else {
        return 0;
      }
    });

    setUsersState({ ...usersState, users: sortedState });
  };

  const onChange = (event) => {
    const typedValue = event.target.value;
    const matchFunction = (item, typed) => {
      const typedUpper = typed.toUpperCase();
      const currentMatch = item.slice(0, typed.length).toUpperCase();
      if (typedUpper === currentMatch) {
        return item;
      }
    };
    const matchedArray = usersState.unchangedUserState.filter((item) =>
      matchFunction(item.name, typedValue)
    );

    setUsersState({ ...usersState, users: matchedArray });
  };

  return (
    <UsersContext.Provider value={usersState}>
      <div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Find Name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={onChange}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" onClick={sortClick}>
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
      </div>
    </UsersContext.Provider>
  );
};

export default UserGenerator;
