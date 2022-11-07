import { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import aux from '../services/auxBtnValidator';
import Loading from '../Components/loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  state = { btnController: true,
    artist: '',
    loading: '',
    albums: '',
    founded: '',
    auxName: '',
    controller: '' };

  validateBtn = ({ target }) => {
    this.setState({
      artist: target.value,
      btnController: aux(1, target),
    });
  };

  fetchAlbum = async () => {
    const { artist } = this.state;
    this.setState({ loading: true, auxName: artist });
    const promise = await searchAlbumsAPI(artist);
    this.setState({ loading: false, albums: promise, artist: '' });
    if (promise.length !== 0) {
      this.setState({ founded: true, controller: false });
    } else { this.setState({ controller: true, founded: false }); }
  };

  render() {
    const { btnController, artist, loading, albums, founded, auxName,
      controller } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        { loading ? <Loading /> : (
          <form>
            <label htmlFor="searchInput">
              <input
                type="text"
                name="searchInput"
                data-testid="search-artist-input"
                onChange={ this.validateBtn }
                value={ artist }
                placeholder="Digite um artista"
              />
            </label>
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ btnController }
              onClick={ this.fetchAlbum }
            >
              Pesquisar
            </button>
          </form>)}
        {founded
          ? (
            <div>
              <h2>
                {' '}
                {` Resultado de álbuns de: ${auxName}`}
              </h2>
              <div className="albumContent">
                {(albums.map((album, value) => (
                  <div className={ `album album${value}` } key={ album.collectionId }>
                    <Link
                      to={ `/album/${album.collectionId}` }
                      data-testid={ `link-to-album-${album.collectionId}` }
                    >
                      Go to album
                    </Link>
                    <h2>{ album.artistName }</h2>
                    <img src={ album.artworkUrl100 } alt={ album.artistName } />
                    <h3>{ album.collectionName }</h3>
                  </div>)))}
              </div>

            </div>) : controller && <h1>Nenhum álbum foi encontrado</h1> }
      </div>
    );
  }
}
