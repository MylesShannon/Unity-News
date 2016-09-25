// require('styles/App.css');

import React from 'react';

import Nav from '../components/Nav';

class IndexComponent extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">{this.props.children || <Home/>}</div>
      </div>
    );
  }
}

export default IndexComponent;
