import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isButtonDisabled: true,
      isLoggedIn: false,
      loading: false,
    };
  }

  handleChange({ target }) {
    const minLength = 3;
    this.setState(() => ({
      name: target.value,
      isButtonDisabled: target.value.length < minLength,
    }));
  }

  handleSubmit(event) {
    const { name } = this.state;
    event.preventDefault();
    this.setState({
      loading: true,
    }, async () => {
      await createUser({ name, image: './default-profile.jpeg' });
      this.setState({
        loading: false,
        isLoggedIn: true,
      });
    });
  }

  render() {
    const { name, isButtonDisabled, isLoggedIn, loading } = this.state;
    return (
      <div className="loginContainer">
        <img src="/logo-trybetunes.png" alt="" className="logo" />
        <div data-testid="page-login" className="loginFormContainer">
          {loading === true
            ? <Loading />
            : (
              <form>
                <input
                  type="text"
                  onChange={ (event) => this.handleChange(event) }
                  data-testid="login-name-input"
                  value={ name }
                  placeholder="Nome"
                />
                <button
                  type="submit"
                  onClick={ (event) => this.handleSubmit(event) }
                  data-testid="login-submit-button"
                  disabled={ isButtonDisabled }
                >
                  Entrar
                </button>
              </form>
            )}
          {isLoggedIn && <Redirect to="/search" />}
        </div>
      </div>
    );
  }
}

export default Login;
