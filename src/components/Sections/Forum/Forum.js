import styles from './Forum.module.scss';

const bubbleStudio = process.env.PUBLIC_URL + '/assets/bubbleStudio.svg';

function Forum() {
  return (
    <section className={styles.forum}>
      <div className={styles.container}>
        <h2 className={styles.title}>Форум</h2>
        
        <div className={styles.threadsGrid}>
          <div className={`${styles.threadCard} ${styles.withImage}`}>
            <div className={styles.threadImage}>
              <img src={bubbleStudio} alt="Bubble Studio" className={styles.image} />
            </div>
            <div className={styles.threadContent}>
              <h3 className={styles.threadTitle}>КиноВселенная "Майора Грома"</h3>
              <p className={styles.threadDescription}>
                В данном треде, Вы сможете узнать намного больше про киновселенную от Bubble про великого майора полиции - Игоря Грома
              </p>
              <button className={styles.moreButton}>Подробнее →</button>
            </div>
          </div>
          
          <div className={`${styles.threadCard} ${styles.withoutImage}`}>
            <div className={styles.threadContent}>
              <h3 className={styles.threadTitle}>Каким будет новый фильм от марвел?</h3>
              <p className={styles.threadDescription}>
                Скоро на экраны выходит новый фильм от Sony Marvel, хотелось бы порассуждать, а каким он будет? Если у вас есть какие-либо заметки, милости прошу к нашему шалошу...
              </p>
              <button className={styles.moreButton}>Подробнее →</button>
            </div>
          </div>
          
          <div className={`${styles.threadCard} ${styles.withoutImage}`}>
            <div className={styles.threadContent}>
              <h3 className={styles.threadTitle}>Как ни будет новый фильм от марвел?</h3>
              <p className={styles.threadDescription}>
                Скоро на экраны выходит новый фильм от Sony Marvel, хотелось бы порассуждать, а каким он будет? Если у вас есть какие-либо заметки, милости прошу к нашему шалошу...
              </p>
              <button className={styles.moreButton}>Подробнее →</button>
            </div>
          </div>
          
          <div className={`${styles.threadCard} ${styles.withImage}`}>
            <div className={styles.threadImage}>
              <img src={bubbleStudio} alt="Popular Movie" className={styles.image} />
            </div>
            <div className={styles.threadContent}>
              <h3 className={styles.threadTitle}>КиноВселенная "Майора Грома"</h3>
              <p className={styles.threadDescription}>
                В данном треде, Вы сможете узнать намного больше про киновселенную от Bubble про великого майора полиции - Игоря Грома
              </p>
              <button className={styles.moreButton}>Подробнее →</button>
            </div>
          </div>
        </div>
        
        <button className={styles.allThreadsButton}>Все треды</button>
      </div>
    </section>
  );
}

export default Forum;