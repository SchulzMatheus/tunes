import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  state = {
    user: {},
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const userData = await getUser();
    this.setState({
      user: userData,
      loading: false,
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      loading ? <Loading />
        : (
          <header data-testid="header-component">
            <nav>
              <Link data-testid="link-to-search" to="/search">Search</Link>
              <br />
              <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
              <br />
              <Link data-testid="link-to-profile" to="/profile">Profile</Link>
              <br />
            </nav>
            <span data-testid="header-user-name">{user.name}</span>
          </header>
        )
    );
  }
}
