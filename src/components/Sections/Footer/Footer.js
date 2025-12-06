import styles from './Footer.module.scss'

const logo = process.env.PUBLIC_URL + '/assets/logo.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
            <h3 className={styles.newsletterTitle}>
                Подпишитесь на нашу рассылку прямо сейчас, всего за <br />
                <span className={styles.price}>999$/мес</span>, и будьте в курсе всех новостей, скидок на подписки <br />
                и понижении цен на фильмы.
            </h3>
          
            <div className={styles.subscribeSection}>
                <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className={styles.emailInput}
                />
                <button className={styles.subscribeButton}>
                    Подписаться
                </button>
                <p className={styles.agreement}>
                    Нажимая на кнопку, вы принимаете правила пользовательского соглашения
                </p>
            </div>
        
            <div className={styles.logoWithMenu}>
                <img src={logo} alt="Multi Cinema" className={styles.logo} width="250" height="120"/>
                <ul className={styles.nav}>
                    <li>Фильмы</li>
                    <li>Треды</li>
                    <li>Новости</li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;