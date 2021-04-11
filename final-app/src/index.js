import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Login from './screens/Login';
import Store from './screens/Store';
import { Route, Switch } from "react-router-dom";
import {BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Detail from './components/Detail';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/App" component={App} />
        <Route path="/components/Detail" component={Detail} />
      </Switch>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);