import { Component } from 'react';

export default class MusicCard extends Component {
  render() {
    const { trackName, previewUrl, classe } = this.props;
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
      </div>
    );
  }
}

MusicCard.propTypes = {}.isRequired;
