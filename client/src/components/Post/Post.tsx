import styles from './Post.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageProvider';
import { resources } from './resources';

function Post() {
  const location = useLocation();
  const { title, body } = location.state;
  const { initial, isRTL } = useLanguage();
  const texts = resources[initial];

  return (
    <div className={styles.wpr}>
      <Link to='/blog' className={styles.back}>
        {isRTL ? '→' : '←'} {texts.back}
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body} dangerouslySetInnerHTML={{ __html: body }}></p>
    </div>
  );
}

export default Post;
