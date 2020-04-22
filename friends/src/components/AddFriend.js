import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = (props) => {
  const [name, setName] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  };

  function addFriend(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", name)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <div>
      <form
        onSubmit={(event) => addFriend(event)}
        onKeyDown={props.closeLoginHandler2}
        tabIndex="0"
      >
        <h1>Add Friend</h1>
        <div>
          <p>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={name.name}
              />
            </label>
          </p>

          <p>
            <label>
              Age:
              <input
                type="age"
                name="age"
                onChange={handleChange}
                value={name.age}
              />
            </label>
          </p>

          <p>
            <label>
              Email:
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={name.email}
              />
            </label>
          </p>
        </div>

        <button onClick={addFriend}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddFriend;