import React from 'react';
import Story from './Story';

class NewsFeedComponent extends React.Component {
  render() {
    var stories = () => {
      if(this.props.articles.length >= 1) {
        var combo = [];
        this.props.articles.map((item) => {
          combo.push(<Story src={item} key={item.id} />);
        })
        return combo;
      } else {
        return <h2><small>Sorry, no new stories right now.</small></h2>
      }
    }

    return (
      <div>
        {stories()}
      </div>
    );
  }
}

NewsFeedComponent.defaultProps = {
  articles: []
}

export default NewsFeedComponent;
