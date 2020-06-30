import React from 'react';
import TrackList from './components/TrackList/TrackList';
import './PlayList.css';

class PlayList extends React.Component {
  render(){
    return(
      <div className="Playlist" >
        <input defaultValue={"New Playlist"} />
        //<TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default PlayList;
