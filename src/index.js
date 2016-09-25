require('normalize.css/normalize.css');
require('styles/Bootstrap.less');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Routes
import App from './modules/App';
import Home from './modules/Home';
import Example from './modules/Example';

// Render the main component into the dom
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/example" component={Example}/>
    </Route>
  </Router>
), document.getElementById('app'))
