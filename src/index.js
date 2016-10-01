import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Routes
import App from './modules/App';
import Home from './modules/Home';
import About from './modules/About';
import Settings from './modules/Settings';

// Render the main component into the dom
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/settings" component={Settings}/>
    </Route>
  </Router>
), document.getElementById('app'))
