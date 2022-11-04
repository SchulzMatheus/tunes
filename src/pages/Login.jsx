import { Component } from 'react';
import prop from 'prop-types';

export default class Login extends Component {
  render() {
    const { validateBtn, btnController, userName } = this.props;
    return (
      <div data-testid="page-login">
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
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  validateBtn: prop.func,
  userName: prop.string,
  btnController: prop.boolean,
}.isRequired;
