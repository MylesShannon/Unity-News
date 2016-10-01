require('normalize.css/normalize.css');
require('styles/Bootstrap.less');
require('styles/App.css');

import React from 'react';
import { Grid } from 'react-bootstrap';

import Home from './Home';
import Nav from '../components/Nav';

class AppModule extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Grid>{this.props.children || <Home/>}</Grid>
      </div>
    );
  }
}

export default AppModule;
