import styles from './Post.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Post() {
  const location = useLocation();
  const { title, body } = location.state;

  return (
    <div className={styles.wpr}>
      <Link to='/blog' className={styles.back}>
        ← Back to the blog
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body} dangerouslySetInnerHTML={{ __html: body }}></p>
    </div>
  );
}

export default Post;
