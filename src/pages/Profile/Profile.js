import React from 'react';
import Footer from '../../components/Sections/Footer/Footer';
import styles from './Profile.module.scss';

const bubbleStudio = process.env.PUBLIC_URL + '/assets/bubbleStudio.svg';
const CoolMan = process.env.PUBLIC_URL + '/assets/CoolMan.svg';
const posterSmall = process.env.PUBLIC_URL + '/assets/posterSmall.svg';

const favoriteMovies = [
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 7
  },
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 8
  },
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 9
  },
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 4
  },
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 6
  },
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 3
  },
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 9
  },
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 10
  },
  {
    id: 1,
    title: 'Сверхъестественное',
    subtitle: 'Supernatural, 43',
    details: [
      'Страна: США, Режисёр: Роберт Сингер',
      'Жанры: фэнтези, ужасы, триллер', 
      'Годы производства: 2005-2020'
    ],
    image: posterSmall,
    rating: 3
  },
];

function Profile() {
  const threads = Array(8).fill({
    title: 'КиноВселенная "Майора Грома"',
    description: 'В данном треде, Вы сможете узнать намного больше про киновселенную от Bubble про великого майора полиции - Игоря Грома',
  });

  return (
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.userInfo}>
          <h2>Профиль пользователя</h2>
          <div className={styles.userCard}>

            <div className={styles.userProfileContainer}>
              <div className={styles.userProfileHeader}>
                <img src={CoolMan} alt="Cool Man" className={styles.CoolMan} />
                <div className={styles.userHeader}>
                  <h2>Cool Man</h2>
                  <p className={styles.userLocation}>Russia, Rostov</p>
                  <div className={styles.userDescription}>
                    <p>
                      Типо описание, очень длинное, очень прикольное и вообще Lorem Ipsum.
                      Типо описание, очень длинное, очень прикольное и вообще Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <h3>Связанные аккаунты</h3>
              <div className={styles.relatedAccounts}>
                
                <div className={styles.accountItem}>
                  <img src={CoolMan} alt="Cool Man" className={styles.CoolMan} />
                  <div className={styles.accountInfo}>
                    <p className={styles.accountName}>Cool Man</p>
                    <p className={styles.accountPlatform}>Профиль на FaceBook</p>
                  </div>
                  <div className={styles.accountStats}>
                    <p className={styles.followers}>100К</p>
                  </div>
                </div>
                
                <div className={styles.accountItem}>
                  <img src={CoolMan} alt="Cool Man" className={styles.CoolMan} />
                  <div className={styles.accountInfo}>
                    <p className={styles.accountName}>Cool Man</p>
                    <p className={styles.accountPlatform}>Профиль на Youtube</p>
                  </div>
                  <div className={styles.accountStats}>
                    <p className={styles.followers}>50K</p>
                  </div>
                </div>
                
                <div className={styles.accountItem}>
                  <img src={CoolMan} alt="Cool Man" className={styles.CoolMan} />
                  <div className={styles.accountInfo}>
                    <p className={styles.accountName}>Cool Man</p>
                    <p className={styles.accountPlatform}>Профиль в VK</p>
                  </div>
                  <div className={styles.accountStats}>
                    <p className={styles.followers}>5K</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.additionalInfo}>
                <div className={styles.headerWithButton}>                
                  <h3 className={styles.title}>Любимые фильмы пользователя</h3>
                  <button className={styles.fullListButton}>Полный список</button>
                </div>
                <div className={styles.posterCardGrid}>
                  {favoriteMovies.map((movie) => (
                    <div key={movie.id} className={styles.posterCard}>
                      <img src={movie.image} alt={movie.title} className={styles.posterImage}/>
                      <div className={styles.posterContent}>
                        <h4 className={styles.posterTitle}>{movie.title}</h4>
                        <p className={styles.posterSubtitle}>{movie.subtitle}</p>
                        <div className={styles.posterDetails}>
                          {movie.details.map((detail, index) => (
                            <p key={index} className={styles.detailLine}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.additionalInfo}>
                <div className={styles.headerWithButton}>                
                  <h3 className={styles.title}>Список “Просмотреть позже”</h3>
                  <button className={styles.fullListButton}>Полный список</button>
                </div>
                <div className={styles.posterCardGrid}>
                  {favoriteMovies.map((movie) => (
                    <div key={movie.id} className={styles.posterCard}>
                      <img src={movie.image} alt={movie.title} className={styles.posterImage}/>
                      <div className={styles.posterContent}>
                        <h4 className={styles.posterTitle}>{movie.title}</h4>
                        <p className={styles.posterSubtitle}>{movie.subtitle}</p>
                        <div className={styles.posterDetails}>
                          {movie.details.map((detail, index) => (
                            <p key={index} className={styles.detailLine}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.additionalInfo}>
                <div className={styles.headerWithButton}>                
                  <h3 className={styles.title}>Оценки пользователя</h3>
                  <button className={styles.fullListButton}>Полный список</button>
                </div>
                <div className={styles.posterCardGrid}>
                  {favoriteMovies.map((movie) => (
                    <div key={movie.id} className={styles.posterCard}>
                      <img src={movie.image} alt={movie.title} className={styles.posterImage}/>
                      <div className={styles.ratingSquare}
                        style={{
                          backgroundColor: movie.rating >= 8 ? '#2DBB55' : 
                          movie.rating >= 5 ? '#959930' : '#D14519'
                        }}>
                        <p className={styles.rating}>{movie.rating}</p>
                      </div>
                      <div className={styles.posterContent}>
                        <h4 className={styles.posterTitle}>{movie.title}</h4>
                        <p className={styles.posterSubtitle}>{movie.subtitle}</p>
                        <div className={styles.posterDetails}>
                          {movie.details.map((detail, index) => (
                            <p key={index} className={styles.detailLine}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.threadsSection}>
          <div className={styles.threadsContainer}>
            <h2 className={styles.threadsTitle}>Треды пользователя</h2>
            
            <div className={styles.threadsList}>
              {threads.map((thread, index) => (
                <div key={index} className={styles.threadCard}>
                  <div className={styles.threadImage}>
                    <img 
                      src={bubbleStudio}
                      alt="Bubble Studio" 
                      className={styles.threadImg}
                    />
                  </div>
                  <div className={styles.threadContent}>
                    <h3 className={styles.threadTitle}>{thread.title}</h3>
                    <p className={styles.threadDescription}>{thread.description}</p>
                    <button className={styles.moreButton}>
                      Подробнее →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;