import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Logo from '../../assets/Logo.png';

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const ShowHeader = () => {
    setShowHeader(true);
  };

  const CloseHeader = () => {
    setShowHeader(false);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user_data'));
    console.log('storedData', storedData);

    if (!storedData) {
      return console.error('The data is not found');
    }

    async function getEmail() {
      try {
        const response = await axios.get(
          `https://diplomka-backend.vercel.app/api/user/${storedData.userId}`
        );
        console.log('fetched email:', response.data.data.email);

        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getEmail();
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  console.log('data', data);

  return (
    <div style={{ width: '100%', position: 'absolute', top: '0', left: '0' }}>
      {!showHeader ? (
        <div className={styles.collapse} id="navbarHeader">
          <div className="container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-x-lg"
              color="white"
              viewBox="0 0 16 16"
              onClick={ShowHeader}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            <div className="row">
              <div className="col-sm py-4">
                <ul
                  className={`${styles.hidden_list} list-unstyled d-flex flex-column align-items-center`}
                >
                  <li>
                    <Link
                      to="/"
                      className={`text-white text-decoration-none ${
                        activeLink === '/' && styles.active
                      }`}
                      onClick={() => handleLinkClick('/')}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-white text-decoration-none"
                      onClick={() => handleLinkClick('/about')}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sdu_alumni"
                      className="text-white text-decoration-none"
                      onClick={() => handleLinkClick('/sdu_alumni')}
                    >
                      SDU ALUMNI
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs"
                      className="text-white text-decoration-none"
                      onClick={() => handleLinkClick('/clubs')}
                    >
                      CLUBS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contacts"
                      className="text-white text-decoration-none"
                      onClick={() => handleLinkClick('/contacts')}
                    >
                      CONTACTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/quote"
                      className="text-white text-decoration-none"
                      onClick={() => handleLinkClick('/quote')}
                    >
                      QUOTE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.headerContainer} border-bottom`}>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
            <div className={`navbar ${styles.hidden_navbar} navbar-dark`}>
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={CloseHeader}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>

            <div className="d-flex">
              <Link style={{ textAlign: 'center' }} to="/" onClick={() => handleLinkClick('/')}>
                <img className={styles.headerLogo} src={Logo} alt="" />
              </Link>
            </div>

            <ul
              className={`nav ${styles.items_visibility} col-12 col-lg-auto mb-2 justify-content-center mb-md-0`}
            >
              <Link
                className={`nav-link text-white ${activeLink === '/' && styles.active}`}
                to="/"
                onClick={() => handleLinkClick('/')}
              >
                HOME
              </Link>
              <Link
                className={`nav-link text-white ${activeLink === '/about' && styles.active}`}
                to="/about"
                onClick={() => handleLinkClick('/about')}
              >
                ABOUT US
              </Link>
              <Link
                className={`nav-link text-white ${activeLink === '/sdu_alumni' && styles.active}`}
                to="/sdu_alumni"
                onClick={() => handleLinkClick('/sdu_alumni')}
              >
                SDU ALUMNI
              </Link>
              <Link
                className={`nav-link text-white ${activeLink === '/clubs' && styles.active}`}
                to="/clubs"
                onClick={() => handleLinkClick('/clubs')}
              >
                CLUBS
              </Link>
              <Link
                className={`nav-link text-white ${activeLink === '/contacts' && styles.active}`}
                to="/contacts"
                onClick={() => handleLinkClick('/contacts')}
              >
                CONTACTS
              </Link>
              <Link
                className={`nav-link text-white ${activeLink === '/quote' && styles.active}`}
                to="/quote"
                onClick={() => handleLinkClick('/quote')}
              >
                QUOTE
              </Link>
            </ul>

            <div className={`${styles.signSearch} text-end`}>
              <div>
                {data ? (
                  <div>
                    <Link to="/adminPage" className={styles.email}>
                      {data.email}
                    </Link>
                  </div>
                ) : (
                  <Link style={{ textDecoration: 'none', color: 'white', margin: '0' }} to="/sign">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
