import React from 'react';
import jquery from 'jquery';
import { LinkContainer} from 'react-router-bootstrap';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class FeedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    }
  }

  componentDidMount() {
    this.request = jquery.get('http://localhost:8002/api/v1/feeds', (result) => {
      this.setState({feeds: result});
    });
  }

  componentWillUnmount() {
    this.request.abort();
  }

  render() {
    const feeds = this.state.feeds.map((feed) => {
      return <ListGroupItem key={feed.id} onClick={() =>{this.props.onFeedSelect(feed.id)}}>{feed.name}</ListGroupItem>
    })

    if(this.state.feeds.length) {
      return (
        <div>
          <Panel header="Feeds">
            <ListGroup fill>
              <ListGroupItem onClick={() => {this.props.onFeedSelect(0)}}>All</ListGroupItem>
              {feeds}
              <ListGroupItem><LinkContainer to="/settings"><Button bsStyle="primary">New Feed</Button></LinkContainer></ListGroupItem>
            </ListGroup>
          </Panel>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default FeedComponent;
