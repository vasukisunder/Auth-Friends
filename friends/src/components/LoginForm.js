
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const LoginForm = (props) => {
  
  const [name, setName] = useState({
    username: "Lambda School",
    password: "i<3Lambd4",
    isLoading: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const login = (e) => {
    e.preventDefault();

    setName({ ...name, isLoading: true });

    axios
      .post("http://localhost:5000/api/login", name)
      .then((res) => {

        localStorage.setItem("token", res.data.payload);

      })
      .catch((err) => console.log(err.response));
    props.history.push("/protected");
  };

  return (
    <div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        onKeyDown={props.closeLoginHandler2}
        tabIndex="0"
      >
        <h1>Login</h1>
        <p >
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={name.username}
            />
          </label>
        </p>

        <p>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={name.password}
            />
          </label>
        </p>
       
        <button type="submit" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);