import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

const Friends = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => getData(), []);

  function getData() {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((error) => console.log(error.res));
  }
  return (
    <div>
      <AddFriend />
      <div>
        {friends.length > 0
          ? friends.map((friend) => (
              <Friend key={friend.id} friend={friend} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Friends;