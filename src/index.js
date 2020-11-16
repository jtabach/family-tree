import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './styles/normalize.css';
import './styles/reset.custom.css';
import './styles/typography.css';

import MyUser from './pages/MyUser';
import UserInfo from './pages/UserInfo';
import EditUser from './pages/EditUser';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <MyUser />
        </Route>
        <Route path="/user/:id">
          <UserInfo />
        </Route>
        <Route path="/edit">
          <EditUser />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
