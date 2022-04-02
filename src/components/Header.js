import React, { Component } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import './Header.css';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: '',
    };
  }

  async componentDidMount() {
    const user = await getUser();
    this.setState({
      loading: false,
      user: user.name,
      userImg: user.image,
    });
  }

  render() {
    const { loading, user, userImg } = this.state;
    return (
      <header data-testid="header-component">
        <Link to="/">
          <h1 className="header-logo">
            <FaHeadphones size="2rem" />
            TrybeTunes
          </h1>
        </Link>
        <div className="header-right">
          <div className="header-profileContainer">
            { loading
              ? (
                <>
                  <img
                    className="header-profile-img"
                    src="./images/default-profile.jpeg"
                    alt=""
                  />
                  <Loading />
                </>)
              : (
                <>
                  <img className="header-profile-img" src={ userImg } alt="" />
                  <p data-testid="header-user-name">{user}</p>
                </>
              )}
          </div>
          <nav>
            <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
