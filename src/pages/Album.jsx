import { Component } from 'react';
import Header from '../Components/Header';

export default class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        Album
      </div>
    );
  }
}
