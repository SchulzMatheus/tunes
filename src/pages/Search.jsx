import { Component } from 'react';
import Header from '../Components/Header';
import aux from '../services/aux';

export default class Search extends Component {
  state = {
    btnController: true,
  };

  validateBtn = ({ target }) => {
    this.setState({
      btnController: aux(1, target),
    });
  };

  render() {
    const { btnController } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        Search
        <form action="get">
          <label htmlFor="searchBar">
            <input
              data-testid="search-artist-input"
              type="text"
              placeholder="nome do artista, album ou musica"
              name="searchBar"
              onChange={ this.validateBtn }
            />
          </label>
          <button
            type="button"
            disabled={ btnController }
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
