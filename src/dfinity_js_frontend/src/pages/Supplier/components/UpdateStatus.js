import React from "react";

const UpdateStatus = ({ id, status, save }) => {
  return (
    <select
      className="form-select form-select-sm mb-3"
      aria-label=".form-select-lg example"
    >
      <option defaultValue="">Select Status</option>
      {status.map((option, index) => (
        <option
          key={index}
          onClick={() => {
            save(id, option.value);
          }}
          value={option.value}
          className="text-black"
        >
          {option.status}
        </option>
      ))}
    </select>
  );
};

export default UpdateStatus;
