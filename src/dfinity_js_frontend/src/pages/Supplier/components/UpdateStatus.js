import React from "react";

const UpdateStatus = ({id, status, save }) => {
  return (
    <div className="w-32">
      <select
        className="form-select form-select-sm mb-3 w-24"
        aria-label=".form-select-lg example"
        onChange={(e) => {
          save(id, e.target.value);
        }}
      >
        <option defaultValue="">Select Status</option>
        {status.map((option, index) => (
          <option key={index} value={option.value} className="text-black">
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UpdateStatus;
