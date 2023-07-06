import styles from './Home.module.css';
import eshVideo from '../../assets/video/esh.mp4';
import { useLanguage } from '../LanguageProvider';
import { resources } from './resources';

function Home() {
  const { initial } = useLanguage();
  const texts = resources[initial];

  return (
    <>
      <main>
        <video
          src={eshVideo}
          autoPlay={true}
          loop={true}
          playsInline={true}
          className={styles.video}
          muted
        ></video>
        <h1 className={styles.heading}>{texts.new_bank}</h1>
      </main>
    </>
  );
}

export default Home;
