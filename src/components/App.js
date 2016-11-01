import React from 'react';
import { Component } from 'react';

import SearchBar from './search_bar'

const API  = 'ADD API KEY';

constructor(props){
  super(props);

  this.state = { videos: []}

  YTSearch({key: API, term: ''}, function(data){
    this.setState({ videos: data })
  })
}

class App extends Component {

  render() {
    return (
      <div>
      <p>Header here</p>
        <SearchBar />
        <VideoList videos={this.state.videos} />
        <footer>Footer here</footer>
      </div>
    );
  }
}

export default App;
