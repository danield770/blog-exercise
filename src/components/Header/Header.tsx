// import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
// import langIcon from '../../assets/svg/lang.svg';
// import { GrLanguage } from 'react-icons/gr';
import LanguagePick from '../images/LanguageSVG';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='esh company logo' className={styles.logo}></img>
      <Link to='/' className={styles.link}>
        Home
      </Link>
      <Link to='/blog' className={styles.link}>
        Blog
      </Link>
      {/* <img src={langIcon} className={styles.lang} /> */}
      <LanguagePick className={styles.lang} />
    </header>
  );
}

export default Header;
