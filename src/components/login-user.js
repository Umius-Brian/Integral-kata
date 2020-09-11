import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LoginUser({handleLogin}) {
  const [usersData, setUsersData] = useState([]);

  async function dbUsers() {
    const result = await axios('http://localhost:5000/users');
    setUsersData(result.data);
  }

  useEffect(() => { dbUsers() }, []);

  return(
    <>
    <h1>Login User:</h1>
      <ul>
        {usersData.map((user, index) => (
          <li key={index}>
            <button onClick={() => {
              handleLogin(user.username)
            }} >{user.username}</button>
          </li>
        ))}
      </ul>
    </>
  )
};
