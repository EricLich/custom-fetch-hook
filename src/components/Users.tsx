import React from "react";
import { User } from "../utils/types";

interface UserProps {
  users: User[];
}

const Users: React.FC<UserProps> = ({ users }) => {
  console.log(users);
  return (
    <>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.username}</p>
              <span>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;
