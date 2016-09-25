import React from 'react';
import { Link } from 'react-router';

class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Example route</h2>
        <Link to="/">index</Link>
      </div>
    );
  }
}

export default ExampleComponent;
