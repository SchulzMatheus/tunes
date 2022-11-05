import React, { Component } from 'react';
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
          <div>
            <header data-testid="header-component">
              Header
              <span data-testid="header-user-name">{user.name}</span>
            </header>
          </div>
        )
    );
  }
}
