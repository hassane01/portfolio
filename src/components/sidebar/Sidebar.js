import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Sidebar.scss';
import logo from '../../assets/images/fullversion.png';
import { FaNetworkWired } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { RxHamburgerMenu } from "react-icons/rx";

function Sidebar() {
  const { i18n } = useTranslation(); // Access i18n
  const [isSidebareopen, setisSidebareopen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <RxHamburgerMenu onClick={() => setisSidebareopen(!isSidebareopen)} className='burger-icon' />
      <div className='nav-bar' id={isSidebareopen ? 'isdispalyed' : 'isntdisplayed'}>
        <Link className='logo' to='/'>
          <img src={logo} alt="navbar logo" />
        </Link>
        <nav>
          <NavLink exact='true' onClick={() => {
    if (isSidebareopen) {
      setisSidebareopen(!isSidebareopen);
    }
  }}   activeclassname='active' to='/'>
            <FontAwesomeIcon  icon={faHome} color='#4d4d4e' />
          </NavLink>
          <NavLink onClick={() => {
    if (isSidebareopen) {
      setisSidebareopen(!isSidebareopen);
    }
  }}  exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>
          <NavLink onClick={() => {
    if (isSidebareopen) {
      setisSidebareopen(!isSidebareopen);
    }
  }}  exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </NavLink>
          <NavLink onClick={() => {
    if (isSidebareopen) {
      setisSidebareopen(!isSidebareopen);
    }
  }}  exact='true' activeclassname='active' className='works-link' to='/works'>
            <FaNetworkWired />
          </NavLink>
          <button onClick={toggleLanguage}>{i18n.language === 'fr' ? 'EN' : 'FR'}</button> {/* Update button text based on language */}
        </nav>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/el-hassan-oubakasse-a1a574277'>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/hassane01'>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
