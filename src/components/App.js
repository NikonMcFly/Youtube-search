import React from 'react';
import { Component } from 'react';

import SearchBar from './search_bar'

const API  = 'ADD API KEY';

constructor(props){
  super(props);

  this.state = {
    videos: [],
    selectedVideo: null
  }

  YTSearch({key: API, term: 'cats'}, function(data){
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
      })
  })
}

class App extends Component {

  render() {

    return (
      <div>
      <p>Header here</p>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}
        <VideoList videos={this.state.videos} />
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
      <footer>Footer here</footer>
      </div>
    );
  }
}

export default App;
