import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

export default function Wall() {
  const [followersPosts, setfollowersPosts] = useState([]);

  async function dbUsers() {
    const result = await axios('http://localhost:5000/followers');
    setfollowersPosts(result.data);
  }

  useEffect(() => { dbUsers() }, []); 
  return (
    <div>
      <h3>Follower Posts</h3>
      <br />
      <ul>
        {followersPosts.map(follower => (
          <li key={follower.objectID}>
            <a href={follower.url}>{follower.username} - {follower.description} {<Moment fromNow>{follower.date}</Moment>}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}