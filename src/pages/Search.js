import React, { Component } from 'react';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      artistSearched: '',
      isButtonDisabled: true,
      loading: true,
      albumsList: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange({ target }) {
    const minLength = 2;
    this.setState({
      artistName: target.value,
      isButtonDisabled: target.value.length < minLength,
    });
  }

  handleSearch(event) {
    const { artistName } = this.state;
    const currentArtistName = artistName;
    event.preventDefault();
    this.setState({
      artistName: '',
      loading: true,
    }, async () => {
      const albums = await searchAlbumsAPI(currentArtistName);
      this.setState({
        loading: false,
        artistSearched: currentArtistName,
        albumsList: albums,
      });
    });
  }

  render() {
    const { artistName, artistSearched, albumsList,
      isButtonDisabled, loading } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <div className="container">
          {loading ? <Loading /> : (
            <div className="searchContainer">
              <form>
                <input
                  type="text"
                  onChange={ (event) => this.handleChange(event) }
                  value={ artistName }
                  className="searchArtistInput"
                  data-testid="search-artist-input"
                  placeholder="Nome do artista"
                />
                <button
                  type="submit"
                  disabled={ isButtonDisabled }
                  data-testid="search-artist-button"
                  onClick={ (event) => this.handleSearch(event) }
                >
                  Pesquisar
                </button>
              </form>
              {artistSearched && (
                <p>
                  {`Resultado de álbuns de: ${artistSearched}`}
                </p>
              )}
              {!albumsList.length && artistSearched
                ? <p>Nenhum álbum foi encontrado</p>
                : (
                  <div className="cardsContainer">
                    {albumsList.map(
                      (album) => <AlbumCard album={ album } key={ album.collectionId } />,
                    )}
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
