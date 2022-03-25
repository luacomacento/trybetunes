import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      userBio: '',
      userImg: '',
      loading: false,
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
      });
    });
  }

  render() {
    const { userName, userEmail, userBio, userImg, loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <div className="profileContainer">
          { loading ? <Loading /> : (
            <>
              <div className="profile-row">
                <img
                  src={ userImg }
                  className="profile-img"
                  alt=""
                  data-testid="profile-image"
                />
                <Link to="/profile/edit" className="edit-btn">Editar perfil</Link>
              </div>
              <h4>Nome</h4>
              <p>{userName}</p>
              <h4>E-mail</h4>
              <p>{userEmail || 'Nenhum e-mail cadastrado'}</p>
              <h4>Descrição</h4>
              <p>{userBio || 'Nenhuma descrição cadastrada'}</p>
            </>
          )}
        </div>

      </div>
    );
  }
}

export default Profile;
