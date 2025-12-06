import Hero from '../../components/Sections/Hero/Hero';
import PopularMovie from '../../components/Sections/PopularMovie/PopularMovie';
import SeeItLater from '../../components/Sections/SeeItLater/SeeItLater';
import News from '../../components/Sections/News/News';
import Forum from '../../components/Sections/Forum/Forum';
import Footer from '../../components/Sections/Footer/Footer';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <PopularMovie />
      <SeeItLater />
      <News />
      <Forum />
      <Footer />
    </div>
  );
}

export default Home;