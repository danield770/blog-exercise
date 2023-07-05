// import React from 'react';

import styles from './Home.module.css';
import eshVideo from '../../assets/video/esh.mp4';
import Header from '../Header/Header';

function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <video
          src={eshVideo}
          autoPlay={true}
          loop={true}
          playsInline={true}
          className={styles.video}
          muted
        ></video>
        <h1 className={styles.heading}>A new bank is coming</h1>
      </main>
    </>
  );
}

export default Home;
