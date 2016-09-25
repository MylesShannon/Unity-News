// require('styles/App.css');

import React from 'react';
import { Link } from 'react-router';

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Home route</h2>
        <Link to="/example">example</Link>
      </div>
    );
  }
}

export default HomeComponent;
