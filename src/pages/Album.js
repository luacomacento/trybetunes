import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import './Album.css';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musicList: [],
      loading: true,
      favoritesList: [],
    };

    this.toggleLoading = this.toggleLoading.bind(this);
    this.updateFavoriteSongs = this.updateFavoriteSongs.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const musicList = await getMusics(id);
    this.setState({
      musicList,
      loading: false,
    });
    this.updateFavoriteSongs();
  }

  async updateFavoriteSongs() {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoritesList: favoriteSongs,
    });
  }

  toggleLoading() {
    this.setState((currentState) => ({
      loading: !currentState.loading,
    }));
  }

  render() {
    const { musicList, loading, favoritesList } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="albumContainer">
          {loading ? <Loading /> : (
            <>
              <div className="albumInfo">
                <img src={ musicList[0].artworkUrl100 } alt="" />
                <h2 data-testid="album-name">{musicList[0].collectionName}</h2>
                <h3 data-testid="artist-name">{musicList[0].artistName}</h3>
              </div>
              <div className="songsListContainer">
                {musicList.map((track, index) => (
                  index > 0 && <MusicCard
                    track={ track }
                    key={ track.trackId }
                    toggleLoadingHandler={ this.toggleLoading }
                    favoritesList={ favoritesList }
                    updateHandler={ this.updateFavoriteSongs }
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Album;
