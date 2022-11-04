import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import profileEdit from './pages/profileEdit';
import notFound from './pages/notFound';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      btnController: true,
      userName: '',
    };
  }

  validateBtn = ({ target }) => {
    const k = 2;
    this.setState({
      userName: target.value,
      btnController: target.value.length <= k,
    });
  };

  render() {
    const { btnController, userName } = this.state;
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Switch>
          <Route exact path="/">
            <Login
              btnController={ btnController }
              validateBtn={ this.validateBtn }
              userName={ userName }
            />
          </Route>
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ profileEdit } />
          <Route path="/" component={ notFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
