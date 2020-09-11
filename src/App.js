import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar';
import LoginUser from './components/login-user';
import Timeline from './components/timeline';
import Wall from './components/wall';
import CreateUser from './components/create-user';
import Followers from './components/followers';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={LoginUser} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/wall" component={Wall} />
        <Route path="/user" component={CreateUser} />
        <Route path="/followers" component={Followers} />
      </div>
    </Router>
  );
}

