import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const logo = process.env.PUBLIC_URL + '/assets/logo.svg';
const searchIcon = process.env.PUBLIC_URL + '/assets/search.svg';
const profileIcon = process.env.PUBLIC_URL + '/assets/profile.svg';
const homeIcon = process.env.PUBLIC_URL + '/assets/home.svg';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  const handleIconClick = () => {
    if (isProfilePage) {
      navigate('/');
    } else {
      navigate('/profile');
    }
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="Multi Cinema" className={styles.logo} width="250" height="120"/>
      <ul className={styles.nav}>
        <li>Фильмы</li>
        <li>Треды</li>
        <li>Новости</li>
      </ul>
      <div className={styles.presentation}></div>
      <div className={styles.icons}>
        <img 
          src={searchIcon} 
          alt="Поиск" 
          className={styles.icon}
          width="32"
          height="31"
        />
        
        <img 
          src={isProfilePage ? homeIcon : profileIcon}
          alt={isProfilePage ? "На главную" : "Профиль"}
          className={styles.icon}
          width="29"
          height="32"
          onClick={handleIconClick}
        />
      </div>
    </header>
  );
}

export default Header;