import React from 'react';
import VideoListItem from './VideoListItem';
import { Component } from 'react'


class VideoList extends Component {

  const videos = this.props.videos.map(function(){
    return <VideoListItem key={video.etag} video={video} />

  })

  render() {
    return (
      <div>
        {videos}
      </div>
    );
  }
}

export default VideoList;
