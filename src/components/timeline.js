import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

export default function Timeline({user}) {
  const [postLists, setpostLists] = useState([]);
  const [description, setDescription] = useState('');

  // retrieve posts from db
  async function dbUsers() {
    const id = user;
    const result = await axios(`http://localhost:5000/posts/${id}`);
    setpostLists(result.data);
  }

  useEffect(() => { dbUsers() }, [user]);

  // add post to db
  const addPost = async e => {
    e.preventDefault();

    const body = {
      username: user,
      description,
      date: new Date()
    }

    const addPostToDB = await axios.post('http://localhost:5000/posts/add', body);

    setpostLists([
      ...postLists,
      {
        id: postLists.length,
        post: description,
        date: new Date()
      }
    ]);
    setDescription('');
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