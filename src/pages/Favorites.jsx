import { Component } from 'react';
import Header from '../Components/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        Favoritos
      </div>
    );
  }
}
