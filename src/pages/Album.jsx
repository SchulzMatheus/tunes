import { Component } from 'react';
import Header from '../Components/Header';
import getMusics from '../services/musicsAPI';
import Loading from '../Components/loading';
import MusicCard from '../Components/MusicCard';

export default class Album extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const promise = await getMusics(id);
    const data = promise;
    this.setState({ data: data[0], songs: data, loading: false });
  }

  render() {
    const { data, songs, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h1>Album</h1>
        { loading
          ? <Loading />
          : (
            <div>
              <div>
                <img
                  src={ data.artworkUrl100 }
                  alt={ `Capa ${data.collectionName}` }
                />
                <br />
                <span data-testid="album-name">
                  { data.collectionName }
                </span>
                <span data-testid="artist-name">{ data.artistName }</span>
              </div>
              <div className="songs">
                {
                  songs.map((song, index) => (
                    index >= 1
                      ? (
                        <MusicCard
                          key={ song.trackId }
                          classe={ `song${index}` }
                          trackName={ song.trackName }
                          previewUrl={ song.previewUrl }
                        />) : null
                  ))
                }
              </div>
            </div>
          )}
      </div>
    );
  }
}

Album.propTypes = {}.isRequired;
