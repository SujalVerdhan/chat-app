import React, { useState } from "react";
import { Gender } from "./gender";
import { Link } from "react-router-dom";

import useSignup from "../../hooks/useSignup"
import { useAuthContext } from "../../context/AuthContext";
export const SignUp = () => {
 
  const [inputs, setInputs] = useState({
    fullName:"",
    userName:"",
    gender:"",
    password:"",
    confirmPassword:"",
  });
const {loading,signup}=useSignup()
  const handleSubmit = async(e) => {
    e.preventDefault();
   await signup(inputs)
  };
  const handleGenderChange = (gender) => {
    setInputs({...inputs,gender});
  };
  return (
    <div
      className="bg-transparent w-96 max-w-md bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100
    shadow-2xl  min-w-80  "
    >
      <div className="flex flex-col p-4 text-gray-100 w-full">
        <h1 className="text-3xl font-semibold text-gray-100 text-center">
          SignUp <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-gray-100">
                FullName
              </span>
            </label>
            <input
              type="text"
              placeholder="Type FullName"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              className="input input-bordered w-full h-10  bg-slate-950"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base  text-gray-100">
                UserName
              </span>
            </label>
            <input
              type="text"
              placeholder="Type UserName"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
              className="input input-bordered w-full h-10  bg-slate-950"
            />
          </div>

          <div>
            <label className="label ">
              <span className="label-text text-base  text-gray-100">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Your Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="input input-bordered w-full h-10  bg-slate-950"
            />
          </div>
          <div>
            <label className="label ">
              <span className="label-text text-base  text-gray-100">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              className="input input-bordered w-full h-10  bg-slate-950"
            />
          </div>
          <Gender
            OnChange={handleGenderChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className=" text-sm hover:underline hover:text-blue-600  block  text-gray-100 "
          >
            Already have an account?
          </Link>
          <button  className="btn btn-block btn-sm-2 mt-2 p-0 h-6 hover:bg-black bg-black text-white border-black">{loading?<span className="loading loading-infinity loading-md"></span>:"Sign Up"}
            
          </button>
        </form>
      </div>
    </div>
  );
};
