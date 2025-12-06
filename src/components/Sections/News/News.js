import styles from './News.module.scss';

const newsMain = process.env.PUBLIC_URL + '/assets/news.png';
const newsCard = process.env.PUBLIC_URL + '/assets/newsCard.png';

function News() {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <h2 className={styles.title}>Новости</h2>
        
        <div className={styles.newsContent}>
          <div className={styles.mainNews}>
            <img src={newsMain} alt="Main news" className={styles.mainImage} />
            <div className={styles.bottomText}>
                The CW заказал пилотные серии «Рыцарей Готама» и спин-одобался родителях Винчестеров.
            </div>
          </div>
          
          <div className={styles.sideNews}>
            <div className={styles.newsItem}>
              <img src={newsCard} alt="News 1" className={styles.newsImage} />
              <div className={styles.newsText}>
                <h3 className={styles.newsTitle}>Дисней выпустит первый хоррор</h3>
                <p className={styles.newsDescription}>
                  Ровным образом рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития...
                </p>
              </div>
            </div>
            
            <div className={styles.newsItem}>
              <img src={newsCard} alt="News 2" className={styles.newsImage} />
              <div className={styles.newsText}>
                <h3 className={styles.newsTitle}>Дисней выпустит первый хоррор</h3>
                <p className={styles.newsDescription}>
                  Ровным образом рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития...
                </p>
              </div>
            </div>
            
            <div className={styles.newsItem}>
              <img src={newsCard} alt="News 3" className={styles.newsImage} />
              <div className={styles.newsText}>
                <h3 className={styles.newsTitle}>Дисней выпустит первый хоррор</h3>
                <p className={styles.newsDescription}>
                  Ровным образом рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития...
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className={styles.readAllButton}>Читать все</button>
      </div>
    </section>
  );
}

export default News;