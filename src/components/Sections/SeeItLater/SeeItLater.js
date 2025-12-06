import styles from './SeeItLater.module.scss';

const filmPoster = process.env.PUBLIC_URL + '/assets/filmPoster.svg';

function SeeItLater() {
  return (
    <section className={styles.seeItLater}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вы хотели посмотреть</h2>
        
        <div className={styles.moviesGrid}>
          <div className={styles.movieCard}>
            <div className={styles.moviePoster}>
              <img src={filmPoster} alt="SUPERNATURAL" className={styles.posterImage} />
            </div>
            <button className={styles.watchButton}>Посмотреть</button>
          </div>
          
          <div className={styles.movieCard}>
            <div className={styles.moviePoster}>
              <img src={filmPoster} alt="SUPERNATURAL" className={styles.posterImage} />
            </div>
            <button className={styles.watchButton}>Посмотреть</button>
          </div>
          
          <div className={styles.movieCard}>
            <div className={styles.moviePoster}>
              <img src={filmPoster} alt="SUPERNATURAL" className={styles.posterImage} />
            </div>
            <button className={styles.watchButton}>Посмотреть</button>
          </div>
        </div>
        <button className={styles.fullListButton}>Полный список</button>
      </div>
    </section>
  );
}

export default SeeItLater;