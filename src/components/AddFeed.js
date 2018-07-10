import React from 'react';
import jquery from 'jquery';
import config from 'config';

import { Panel, ListGroup, ListGroupItem, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class AddFeedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      name: '',
      rss: '',
      description: '',
      photo: ''
    }
    this.handleAddFeed = this.handleAddFeed.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    this.request = jquery.get(config.api+'/api/v1/feeds', (result) => {
      this.setState({feeds: result});
    });
  }

  componentWillUnmount() {
    this.request.abort();
  }

  handleAddFeed(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var rss = this.state.rss.trim();
    var description = this.state.description.trim();
    var photo = this.state.photo.trim();
    if (!name || !rss || !description || !photo) {
      return;
    }
    jquery.post(config.api+'/api/v1/feeds', {name: name, rss: rss, description: description, photo: photo}, (resp) => {
        this.state.feeds.push({name: name, rss: rss, description: description, photo: photo, id: resp.id});
        this.setState({feeds: this.state.feeds, name: '', rss: '', description: '', photo: ''});
    }).fail(() => {
      this.setState({name: '', rss: '', description: '', photo: ''});
    })
  }

  handleStateChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  render() {
    const feeds = this.state.feeds.map((feed) => {
      return <ListGroupItem key={feed.id} >{feed.name}</ListGroupItem>
    })

    if(this.state.feeds.length) {
      return (
        <div>
          <Panel header="Feeds">
            <ListGroup>
              {feeds}
              <ListGroupItem>
                <Form inline onSubmit={this.handleAddFeed}>
                  <FormGroup controlId="name">
                    <ControlLabel>Name</ControlLabel>
                    {' '}
                    <FormControl
                      type="text"
                      value={this.state.name}
                      placeholder="Web News Source"
                      onChange={this.handleStateChange}
                    />
                  </FormGroup>
                  {' '}
                  <FormGroup controlId="rss">
                    <ControlLabel>RSS link</ControlLabel>
                    {' '}
                    <FormControl
                      type="text"
                      value={this.state.rss}
                      placeholder="http://example.com/rss"
                      onChange={this.handleStateChange}
                    />
                  </FormGroup>
                  {' '}
                  <FormGroup controlId="description">
                    <ControlLabel>Desc.</ControlLabel>
                    {' '}
                    <FormControl
                      type="text"
                      value={this.state.description}
                      placeholder="The leader in web news!"
                      onChange={this.handleStateChange}
                    />
                  </FormGroup>
                  {' '}
                  <FormGroup controlId="photo">
                    <ControlLabel>Photo</ControlLabel>
                    {' '}
                    <FormControl
                      type="text"
                      value={this.state.photo}
                      placeholder="http://i.imgur.com/GPpuyqP.jpg"
                      onChange={this.handleStateChange}
                    />
                  </FormGroup>
                  {' '}
                  <Button type="submit" bsStyle="primary">
                    Add
                  </Button>
                </Form>
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default AddFeedComponent;
