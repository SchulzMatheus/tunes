import { Component } from 'react';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './loading';

export default class MusicCard extends Component {
  state = { isChecked: false, loading: '' };

  async componentDidMount() {
    const { trackName } = this.props;
    const favoriteList = await getFavoriteSongs();
    this.setState({ isChecked: favoriteList.some((e) => e.trackName === trackName) });
  }

  isFavorite = async ({ target }, songInfo) => {
    if (target.checked) {
      this.setState({ isChecked: target.checked, loading: true });
      await addSong(songInfo);
      this.setState({
        loading: false,
      });
    } else {
      this.setState({ isChecked: target.checked, loading: true });
      await removeSong(songInfo);
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { trackName, previewUrl, classe, trackId, songData } = this.props;
    const { isChecked, loading } = this.state;
    return (
      <div className={ `song ${classe}` }>
        <p>{ trackName }</p>
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
        </audio>
        { loading && <Loading /> }
        <label
          data-testid={ `checkbox-music-${trackId}` }
          htmlFor={ trackId }
        >
          Favorita
          <input
            type="checkBox"
            id={ trackId }
            onChange={ (change) => this.isFavorite(change, songData) }
            checked={ isChecked }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {}.isRequired;
