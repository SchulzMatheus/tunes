import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../Components/loading';

export default class Login extends Component {
  render() {
    const { validateBtn, btnController, userName, loading,
      redirectController, handleClick } = this.props;
    if (redirectController) {
      return (<Redirect to="/search" />);
    }
    return (
      <div data-testid="page-login">
        { loading ? <Loading />
          : (
            <div>
              <h1>Login</h1>
              <form action="get">
                <label htmlFor="login">
                  <input
                    data-testid="login-name-input"
                    type="text"
                    name="login"
                    onChange={ validateBtn }
                    value={ userName }
                  />
                </label>
                <button
                  type="button"
                  data-testid="login-submit-button"
                  disabled={ btnController }
                  onClick={ handleClick }
                >
                  Entrar
                </button>
              </form>
            </div>)}
      </div>
    );
  }
}

Login.propTypes = {}.isRequired;
