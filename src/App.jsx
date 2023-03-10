import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import profileEdit from './pages/profileEdit';
import notFound from './pages/notFound';
import { createUser } from './services/userAPI';
import aux from './services/auxBtnValidator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      btnController: true,
      userName: '',
      redirectController: false,
      loading: false,
    };
  }

  resetRedicValue = () => {
    this.setState({ redirectController: false });
  };

  validateBtn = ({ target }) => {
    this.setState({
      userName: target.value,
      btnController: aux(2, target),
    });
  };

  handleClick = async () => {
    const { userName } = this.state;
    this.setState({ loading: true });
    await createUser({ name: userName });
    this.setState({ redirectController: true,
      loading: false,
    }, this.resetRedicValue);
  };

  render() {
    const { btnController, userName, redirectController, loading } = this.state;
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Switch>
          <Route exact path="/">
            <Login
              btnController={ btnController }
              validateBtn={ this.validateBtn }
              userName={ userName }
              redirectController={ redirectController }
              loading={ loading }
              handleClick={ this.handleClick }
            />
          </Route>
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ profileEdit } />
          <Route path="/" component={ notFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
