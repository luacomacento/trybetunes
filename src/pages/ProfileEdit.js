import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';
import './ProfileEdit.css';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      userBio: '',
      userImg: '',
      loading: false,
      isButtonDisabled: true,
      isInfoSaved: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({
        userName: user.name,
        userEmail: user.email,
        userBio: user.description,
        userImg: user.image,
        loading: false,
      }, this.validateButton);
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, this.validateButton);
  }

  async handleSubmit(event) {
    const { userName, userEmail, userBio, userImg } = this.state;
    const newInfo = {
      name: userName,
      email: userEmail,
      description: userBio,
      image: userImg,
    };
    event.preventDefault();
    this.setState({ loading: true }, async () => {
      await updateUser(newInfo);
      this.setState({ isInfoSaved: true });
    });
  }

  validateButton() {
    const { userName, userEmail, userBio, userImg } = this.state;
    const isFormFilled = userName.length > 0
      && userEmail.length > 0 && userBio.length > 0 && userImg.length > 0;
    const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
    const isEmailValid = emailFormat.test(userEmail);
    this.setState({
      isButtonDisabled: !(isEmailValid && isFormFilled),
    });
  }

  render() {
    const { userName, userEmail, userBio, userImg,
      loading, isButtonDisabled, isInfoSaved } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <div className="profileEditContainer">
          { loading ? <Loading /> : (
            <form>
              <label htmlFor="inputName">
                Nome
                <input
                  type="text"
                  value={ userName }
                  name="userName"
                  id="inputName"
                  onChange={ (event) => this.handleChange(event) }
                  data-testid="edit-input-name"
                />
              </label>
              <label htmlFor="inputEmail">
                E-mail
                <input
                  type="email"
                  value={ userEmail }
                  name="userEmail"
                  id="inputEmail"
                  onChange={ (event) => this.handleChange(event) }
                  data-testid="edit-input-email"
                />
              </label>
              <label htmlFor="inputBio">
                Descrição
                <input
                  type="text"
                  value={ userBio }
                  name="userBio"
                  id="inputBio"
                  onChange={ (event) => this.handleChange(event) }
                  data-testid="edit-input-description"
                />
              </label>
              <label htmlFor="inputImg">
                Imagem de usuário
                <input
                  type="text"
                  data-testid="edit-input-image"
                  value={ userImg }
                  name="userImg"
                  id="inputImg"
                  onChange={ (event) => this.handleChange(event) }
                />
              </label>
              <button
                type="submit"
                data-testid="edit-button-save"
                disabled={ isButtonDisabled }
                onClick={ (event) => this.handleSubmit(event) }
              >
                Enviar

              </button>
            </form>
          )}
        </div>
        {isInfoSaved && <Redirect to="/profile" />}
      </div>
    );
  }
}

export default ProfileEdit;
