import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import './MusicCard.css';

class MusicCard extends Component {
  async handleFavorite({ target }) {
    const { track, toggleLoadingHandler, updateHandler } = this.props;
    // Aqui estou invertendo pois o target.checked está retornando o valor já após o clique, visto que estou trabalhando no evento onChange. Por isso nomeei a variável para wasChecked, a fim de ficar mais compreensivo.
    const wasChecked = !target.checked;
    toggleLoadingHandler();
    if (wasChecked) {
      await removeSong(track);
    } else {
      await addSong(track);
    }
    await updateHandler();
    toggleLoadingHandler();
  }

  render() {
    const { track, favoritesList, showArtwork } = this.props;
    const { trackName, trackId, previewUrl, artworkUrl30, collectionName } = track;
    return (
      <div className="songContainer">
        {showArtwork
          && <img src={ artworkUrl30 } alt={ collectionName } className="songcard-img" />}
        <h4>{trackName}</h4>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ `check-${trackId}` }>
          <input
            id={ `check-${trackId}` }
            type="checkbox"
            className="favoriteCheck"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ (event) => this.handleFavorite(event, trackId) }
            checked={ favoritesList.some((song) => song.trackId === trackId) }
          />
          Favorita
        </label>
      </div>
    );
  }
}

MusicCard.defaultProps = {
  showArtwork: false,
};

MusicCard.propTypes = {
  track: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleLoadingHandler: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired,
  favoritesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  showArtwork: PropTypes.bool,
};

export default MusicCard;
