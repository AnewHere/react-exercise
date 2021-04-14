import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { logRouters } from './config/Routers';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {logRouters.map(item => {
          return <Route key={item.path} {...item} />
        })}
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


