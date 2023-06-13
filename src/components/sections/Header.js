import { NavLink } from 'react-router-dom';

import HeaderSearch from '../../UI/HeaderSearch';
import Navigation from '../../UI/Navigation';

import styles from './Header.module.scss';
import '../../index.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className="logo">
          <NavLink to={'/'}>
            <img src="./img/svg/logo.svg" alt="Logo" />
          </NavLink>
        </div>
        <Navigation />
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header;
