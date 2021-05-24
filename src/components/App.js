import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {

  state = {
    videos : [],
    selectedVideo: null,
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items
    });
  };

  onVideoSelected = (video) => {
    this.setState({
      selectedVideo: video
    })
  };

  render() {
    return (
      <div className="ui-continer">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected}/>
      </div>
    )
  }
}

export default App;