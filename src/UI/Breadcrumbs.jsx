import { NavLink } from 'react-router-dom';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const address = window.location.href;
  const lastSlashIndex = address.lastIndexOf('/');
  const lastSegment = address.substring(lastSlashIndex + 1);

  return (
    <div className={styles.breadcrumbs}>
      <NavLink to="/" className={styles.breadCrumbsText}>
        <img
          src="./img/svg/home.svg"
          className={styles.breadcrumbsIcon}
          alt="Home"
        />
        Home
      </NavLink>
      <img
        className={styles.breadcrumbsArrow}
        src="./img/svg/arrow-right.svg"
        alt="Arrow top"
      />
      {lastSegment}
    </div>
  );
};

export default Breadcrumbs;
