import styles from './PopularMovie.module.scss';

const poster = process.env.PUBLIC_URL + '/assets/PopularMovie.svg';

function PopularMovie() {
  return (
    <section className={styles.popular}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Самый популярный фильм на неделе</h2>
      </div>
      
      <div className={styles.movieContainer}>
        <div className={styles.cardWrapper}>
          <img src={poster} alt="SUPERNATURAL" className={styles.moviePoster} />
          <div className={styles.movieInfo}>
            <button className={styles.watchButton}>Посмотреть</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularMovie;