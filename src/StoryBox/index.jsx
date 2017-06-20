import React, { Component } from 'react';

class StoryBox extends Component {

  render() {
    const now = new Date();
    const topicList = ['HTML', 'Javascript', 'React'];

    return(
      <div>
        <h3>Stories App</h3>
        <p className="lead">
          Current Time: { now.toTimeString() }
        </p>
        <ul>
          { topicList.map(topic => <li>{topic}</li>) }
        </ul>
      </div>
    );
  }
}

export default StoryBox;
