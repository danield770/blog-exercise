import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useLanguage } from '../LanguageProvider';
import { resources } from './resources';

function Header() {
  const languages: Array<'English' | 'עברית'> = ['English', 'עברית'];
  const { initial, lang } = useLanguage();
  const texts = resources[initial];

  return (
    <header className={styles.header}>
      <img src={logo} alt='esh company logo' className={styles.logo}></img>
      <Link to='/' className={styles.link}>
        {texts.home}
      </Link>
      <Link to='/blog' className={styles.link}>
        {texts.blog}
      </Link>
      <div className={styles.lang}>
        <span>{lang}</span>
        <LanguageSwitcher languages={languages} />
      </div>
    </header>
  );
}

export default Header;
