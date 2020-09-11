import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  const addUser = async e => {
    e.preventDefault();

    const body = {
      username
    }

    const addUserToDB = await axios.post('http://local:5000/users/add', body);

    setUsers([
      ...users,
      {
        id: users.length,
        name: username,
      }
    ])

    setUsername('');
  }

  return (
    <div>
      <h3>Create New User</h3>
      <br />
      <form onSubmit={addUser}>
        <div className="form-group">
          <label>Username: </label>
          <input type='text'
            required
            className='form-control'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input type='submit' value='Create User' className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}