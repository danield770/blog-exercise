// import React from 'react';
import styles from './Post.module.css';
import { useLocation } from 'react-router-dom';
function Post() {
  const location = useLocation();
  const { title, body } = location.state;

  return (
    <div className={styles.wpr}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{body}</p>
    </div>
  );
}

export default Post;
