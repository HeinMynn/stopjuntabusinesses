import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://mm010221.herokuapp.com/user/login", {
        email: newUser.email,
        password: newUser.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/admin/addnewcdm");
      })
      .catch((err) => {
        if (err.response) {
          setErrors(err.response.data);
        }
      });
  }
  return (
    <div>
      <div className="formWrapper w-full md:w-1/3 mx-auto px-4">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
            />
          </label>
          {errors.email ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.email}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="password" className="text-gray-600">
            Password
            <input
              type="password"
              name="password"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
            />
          </label>
          {errors.password ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.password}
            </span>
          ) : (
            ""
          )}
          <input
            type="submit"
            value="Log In"
            className="px-6 py-2 mt-2 rounded-md bg-red-400 text-white hover:bg-red-800 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
