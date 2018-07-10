import React from 'react';
import { Panel, Well, Jumbotron, Image } from 'react-bootstrap';

class StoryComponent extends React.Component {
  render() {
    const head = (
      <strong><a href={this.props.src.url} target="_blank">{this.props.src.title}</a></strong>
    )
    const foot = () => {
      if(this.props.src['_feed']) {
        return (<div>
          <div className="pull-left">via <a href={this.props.src['_feed'].homepage} target="_blank">{this.props.src['_feed'].name}</a></div>
          <div className="pull-right"><span className="text-muted">{new Date(this.props.src.published).toString()}</span></div>
          <div className="clearfix"></div>
        </div>)
      } else {
        return <div></div>
      }
    }
    const storyImage = () => {
      if(this.props.src.photo) {
        return <Jumbotron><Image className="center-block" src={this.props.src.photo} responsive /></Jumbotron>
      } else {
        return
      }
    }

    return (
      <div>
        <Panel header={head} footer={foot()}>
          {storyImage()}
          <Well bsSize="large">{this.props.src.description}</Well>
        </Panel>
      </div>
    );
  }
}

export default StoryComponent;
