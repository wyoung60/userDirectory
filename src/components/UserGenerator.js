//Import necessary dependencies
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UsersContext from "../utils/UsersContext";
import UserRowSetup from "./UserRowSetup";

//Function for export
const UserGenerator = () => {
  //Create user state and add set state function.
  const [usersState, setUsersState] = useState({
    users: [],
    unchangedUserState: [],
  });

  //Use effect to pull initial data set
  useEffect(() => {
    //Calls API.js to get data once data is recieved sorts and sets User state.
    API.userData().then((res) => {
      //Store returned data in variable
      const data = res.data.results;
      //Add a userID for key
      let userID = 0;
      //Map the array pulling in necessary data and returning an object
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

      //Use a spread operator to pull all data from usersState and add data to both keys of object
      setUsersState({
        ...usersState,
        users: usersArray,
        //This key is used to reference back to after being changed.
        unchangedUserState: usersArray,
      });
    });
  }, []);

  //Function for sorting when clicking on name
  const sortClick = () => {
    //Store sorted array into new variable based on name
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

    //Sets usersState to new sorted Array
    setUsersState({ ...usersState, users: sortedState });
  };

  //Function for changes made in input bar
  const onChange = (event) => {
    const typedValue = event.target.value;
    //Function to match what has been typed with array of names
    const matchFunction = (item, typed) => {
      const typedUpper = typed.toUpperCase();
      const currentMatch = item.slice(0, typed.length).toUpperCase();
      if (typedUpper === currentMatch) {
        return item;
      }
    };

    //Variable to stored matched names from the unchangeUserState
    const matchedArray = usersState.unchangedUserState.filter((item) =>
      matchFunction(item.name, typedValue)
    );

    //Sets users to new array.
    setUsersState({ ...usersState, users: matchedArray });
  };

  //Returns JSX values
  return (
    <UsersContext.Provider value={usersState}>
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
            Click on name sort employees alphabetically or type a name into the
            search bar.
          </p>
        </div>
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
