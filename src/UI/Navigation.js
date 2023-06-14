import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navLink} to="shorts">
        Shorts
      </NavLink>
      <NavLink className={styles.navLink} to="pants">
        Pants
      </NavLink>
      <NavLink className={styles.navLink} to="shirts">
        Shirts
      </NavLink>
      <NavLink className={styles.navLink} to="accessories">
        Accessories
      </NavLink>
      <NavLink className={styles.navLink} to="sale">
        Sale
      </NavLink>
    </nav>
  );
};

export default Navigation;
