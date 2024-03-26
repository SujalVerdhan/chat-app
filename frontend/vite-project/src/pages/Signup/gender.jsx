import React from "react";

export const Gender = (props) => {
  return (
    <>
      <div className="form-control w-max inline-block mx-2">
        <label className="label cursor-pointer">
          <span className="label-text mx-1 text-gray-100">Male</span>
          <input
            type="checkbox"
            checked={props.selectedGender === "male"}
            onChange={() => props.OnChange("male")}
            className="checkbox border-gray-100"
          />
        </label>
      </div>
      <div className="form-control w-max inline-block">
        <label className="label cursor-pointer ">
          <span className="label-text mx-1 text-gray-100">Female</span>
          <input
            type="checkbox"
            checked={props.selectedGender === "female"}
            onChange={() => props.OnChange("female")}
            className="checkbox border border-gray-100"
          />
        </label>
      </div>
    </>
  );
};
