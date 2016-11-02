import React from 'react';
import { Component } from 'react';

class VideoListItem extends Component {

  render() {
    const video = this.props.video;
    const onVideoSelect = this.props.onVideoSelect;
    const imageUrl = video.snippet.thumbail.default.url;
    return (
      <div>
        <div>
          <img src={imageUrl}/>
        </div>
        <div>{video.snippet.title}</div>
      </div>
    );
  }
}

export default VideoListItem;
