import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Login feature to keep track of all users
export default function LoginUser({handleLogin}) {
  const [usersData, setUsersData] = useState([]);

  async function dbUsers() {
    const result = await axios('http://localhost:5000/users');
    setUsersData(result.data);
  }

  useEffect(() => { dbUsers() }, []);

  return(
    <>
    <h2>Login User:</h2>
      <ul>
        {usersData.map((user, index) => (
          <li key={index}>
            <button className="btn btn-light btn-sm" onClick={() => {
              handleLogin(user.username)
            }} >{user.username}</button>
          </li>
        ))}
      </ul>
    </>
  )
};