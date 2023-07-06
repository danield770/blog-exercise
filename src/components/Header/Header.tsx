import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Header() {
  const languages = { en: 'English', he: 'עברית' };
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
      <LanguageSwitcher languages={languages} />
    </header>
  );
}

export default Header;
