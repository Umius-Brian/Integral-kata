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

  // pass props via Router to persist login status
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
        <Route path="/timeline" render={() =>
          <Timeline user={loginStatus}/>} />
        <Route path="/wall" render={() =>
          <Wall user={loginStatus}/>} />
        <Route path="/user" render={() =>
          <CreateUser user={loginStatus}/>} />
        <Route path="/followers" render={() =>
          <Followers user={loginStatus}/>} />
      </div>
    </Router>
  );
}

