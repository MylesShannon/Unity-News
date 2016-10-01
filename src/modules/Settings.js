import React from 'react';

import AddFeed from '../components/AddFeed'

class SettingsModule extends React.Component {
  render() {
    return (
      <div>
        <h2>Settings</h2>
        <AddFeed />
      </div>
    );
  }
}

export default SettingsModule;
