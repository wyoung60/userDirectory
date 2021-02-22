import React from "react";

const InputBar = (props) => {
  return (
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
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputBar;
