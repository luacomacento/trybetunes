import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import './Favorites.css';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      favoritesList: [],
    };

    this.toggleLoading = this.toggleLoading.bind(this);
    this.updateFavoriteSongs = this.updateFavoriteSongs.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const favoritesList = await getFavoriteSongs();
      this.setState({
        loading: false,
        favoritesList });
    });
  }

  toggleLoading() {
    this.setState((currentState) => ({
      loading: !currentState.loading,
    }));
  }

  async updateFavoriteSongs() {
    console.log('oi');
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoritesList: favoriteSongs,
    });
  }

  render() {
    const { favoritesList, loading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <div className="favoritesContainer">
          {loading
            ? <Loading />
            : (
              <>
                {favoritesList.map((song) => (
                  <MusicCard
                    track={ song }
                    key={ song.trackId }
                    favoritesList={ favoritesList }
                    toggleLoadingHandler={ this.toggleLoading }
                    updateHandler={ this.updateFavoriteSongs }
                    showArtwork
                  />))}
                {!favoritesList.length && <p>Nenhuma música favoritada</p>}
              </>
            )}
        </div>
      </div>
    );
  }
}

export default Favorites;
