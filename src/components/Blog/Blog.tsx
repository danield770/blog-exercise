import styles from './Blog.module.css';
import React from 'react';
import { useData } from '../../hooks/useData';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageProvider';
import { resources } from './resources';

function Blog() {
  const [page, setPage] = React.useState(1);
  const { initial, isRTL } = useLanguage();
  const texts = resources[initial];
  // const videoRef = React.useRef<HTMLVideoElement>(null);

  const POSTS_PER_PAGE = 3;
  // In a real app, the backend api should provide a way to know if there are more posts
  const TOTAL_POSTS = 12;
  const key =
    initial === 'en' ? 'posts' : initial === 'he' ? 'hebrewposts' : 'posts';

  const { data, isLoading, isPreviousData } = useData(
    `${key}?_page=${page}&_limit=${POSTS_PER_PAGE}`,
    key,
    page
  );

  console.log({ data });

  return (
    <div className={styles.blogWpr}>
      {isLoading ? (
        <div>{texts.loading}</div>
      ) : (
        <>
          <ol className={styles.blogList}>
            {data?.map(
              ({
                id,
                title,
                body,
                date_created,
              }: {
                id: number;
                title: string;
                body: string;
                date_created: string;
              }) => (
                <li
                  className={styles.blogItem}
                  key={id}
                  // onMouseEnter={() => {
                  //   videoRef?.current?.play;
                  // }}
                  // onMouseLeave={() => {
                  //   videoRef?.current?.pause;
                  // }}
                >
                  <Link to={`/post/${id}`} state={{ id, title, body }}>
                    <div className={styles.contentWpr}>
                      <video
                        className={styles.video}
                        src='https://www.esh.com/assets/card-vid.e4092562.mp4'
                        autoPlay
                        loop
                        playsInline
                        muted
                        // ref={videoRef}
                      ></video>
                      <div className={styles.content}>
                        <div className={styles.date}>{date_created}</div>
                        <div className={styles.title}>{title}</div>
                        <div
                          className={styles.body}
                          dangerouslySetInnerHTML={{ __html: body }}
                        ></div>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            )}
          </ol>
          <div className={styles.navWpr}>
            <button
              className={styles.navBtn}
              type='button'
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              {isRTL ? '→' : '←'} {texts.prev}
            </button>{' '}
            <button
              type='button'
              className={styles.navBtn}
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={
                isPreviousData ||
                page === Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE)
              }
            >
              {texts.next} {isRTL ? '←' : '→'}
            </button>
          </div>
          {/* <ReactQueryDevtools initialIsOpen /> */}
        </>
      )}
    </div>
  );
}

export default Blog;
