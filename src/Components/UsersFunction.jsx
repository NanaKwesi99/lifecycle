import React, { useEffect, useState } from "react";
import axios from "axios";
const UserFunction = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((yes) => {
        setUsers(yes.data);
      })
      .catch((no) => {
        console.log(no);
      });
  }, []);
  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      {users.map((user, id) => (
                    <div key={id}>
                        <h5>{user.name}</h5>
                        <h5>{user.username}</h5>
                        <h5>{user.email}</h5>
                    </div>
                ))}
    </div>
  );
};
export default UserFunction;