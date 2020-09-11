import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar';
import LoginUser from './components/login-user';
import Timeline from './components/timeline';
import Wall from './components/wall';
import CreateUser from './components/create-user';
import Followers from './components/followers';

export default function App() {
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = user => {
    setLoginStatus(user);
  }

  const handleLogout = () => {
    setLoginStatus('');
  }
  return (
    <Router>
      <div className="container">
        <Navbar />
          {loginStatus ? <>
            <p>User: {loginStatus}</p>
            <button className="btn btn-light btn-sm" onClick={handleLogout}>Logout</button>
            </> :
            <LoginUser handleLogin={handleLogin} />
          }
        <br />
        <Route path="/timeline" component={Timeline} />
        <Route path="/wall" component={Wall} />
        <Route path="/user" component={CreateUser} />
        <Route path="/followers" component={Followers} />
      </div>
    </Router>
  );
}

