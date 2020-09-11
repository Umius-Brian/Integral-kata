import React, { useState } from 'react';
import axios from 'axios';

export default function Timeline() {
  const [postLists, setpostLists] = useState([]);
  const [description, setDescription] = useState('');

  async function dbUsers() {
    const result = await axios(`http://localhost:5000/posts`);
    setpostLists(result.data);
  }

  const addpost = async e => {
    
  }
  return(
    <div>
      <h3>Create New Post</h3>
      <br />
      <form onSubmit={addPost}>
        <div className="form-group">
          <label>Posts: </label>
          <input type="text"
            required
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <ul>
          {postLists.map(post => (
            <li key={post.id}>{post.name} {post.post} {post.description} ({<Moment fromNow>{post.date}</Moment>})</li>
          ))}
        </ul>
        <div className="form-group">
          <input type="submit" value="Post" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}