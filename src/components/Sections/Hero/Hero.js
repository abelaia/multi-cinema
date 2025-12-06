import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
        Фильмы, сериалы, мультфильмы<br/> в одном месте!
        </h1>
                
        <p className={styles.description}>
          Всегда хотели узнать где можно дешевле посмотреть то или иное произведение исскуства? 
          Просто обсудить какой-то либо кинофраншизу? А может просто посмотреть последние новости в сфере кино?
          Тогда, данный сайт был сделан для вас!
        </p>
        
        <button className={styles.button}>
          Посмотреть каталог фильмов
        </button>
      </div>
    </section>
  );
}

export default Hero;