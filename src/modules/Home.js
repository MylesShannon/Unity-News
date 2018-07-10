import React from 'react';
import jquery from 'jquery';
import { Col, Row, PageHeader } from 'react-bootstrap';
import config from 'config';

import NewsFeed from '../components/NewsFeed';
import Feeds from '../components/Feeds';

var allArticles = [];

class HomeModule extends React.Component {
  constructor(props) {
    super(props);
    this.handleFeedSelect = this.handleFeedSelect.bind(this);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    this.request = jquery.get(config.api+'/api/v1/articles', (result) => {
      allArticles = result;
      this.setState({articles: allArticles});
    });
  }

  componentWillUnmount() {
    this.request.abort();
  }

  handleFeedSelect(selectedId) {
    var selectedArticles = [];
    if(selectedId === 0) {
      selectedArticles = allArticles;
    } else {
      for(let a of allArticles) {
        if(a['_feed'] && a['_feed'].id === selectedId) {
          selectedArticles.push(a);
        }
      }
    }

    this.setState({articles: selectedArticles});
  }

  render() {
    return (
      <div>
        <Row>
          <PageHeader>Welcome <small>to your place for everything internet news</small></PageHeader>
        </Row>
        <Row>
          <Col md={2}>
            <Feeds onFeedSelect={this.handleFeedSelect} />
          </Col>
          <Col md={10}>
            <NewsFeed articles={this.state.articles}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeModule;
