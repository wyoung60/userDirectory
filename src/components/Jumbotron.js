import React from "react";

//Component for bootstrap jumbotron.
const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">
        Click on name sort employees alphabetically or type a name into the
        search bar.
      </p>
    </div>
  );
};

export default Jumbotron;
