import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Retrieve followers from users
export default function Followers() {
  const [followers, setFollowers] = useState([]);
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [date, newDate] = useState(new Date());

  async function dbUsers() {
    const result = await axios('http://localhost:5000/users');
    setFollowers(result.data);
  }

  useEffect(() => { dbUsers() }, []);

  // add follower to db by user
  const addFollower = async e => {
    e.preventDefault();

    const body = {
      username,
      description,
      date
    }

    const addFollowerToDB = await axios.post('http://localhost:5000/followers/add', body);

    setFollowers([
      ...followers,
      {
        id: followers.length,
        name: username,
        post: description,
        date: new Date()
      }
    ])
  }
  return(
    <div>
      <h3>Followers List</h3>
      <br />
      <form onSubmit={addFollower}>
        <ul>
          {followers.map(follower => (
            <li key={follower.objectID}>
              <a href={follower.url}>{follower.username}</a>
              <br />
              <button type="submit" className="btn btn-secondary btn-sm">Follow</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}