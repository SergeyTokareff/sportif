import { NavLink } from 'react-router-dom';

import Button from '../../UI/Button';

import styles from './SellingPants.module.scss';

export const SellingPants = () => {
  return (
    <section className={styles.sellingPants}>
      <div className={`container ${styles.sellingPantsContainer}`}>
        <div className={styles.sellingPantsImg}>
          <img src="./img/bestselling-pants.png" alt="Bestselling pants" />
        </div>

        <div className={styles.sellingPantsText}>
          <h2 className={`${styles.sellingPantsTitle} section-title`}>
            Our bestselling pants
          </h2>
          <p className={styles.sellingPantsSubtitle}>
            Our classic cargo pants are built to last and designed to exceed
            your expectations! From Frequent Traveler to Hatteras to Trinidad,
            we have the perfect fit for you!
          </p>
          <Button className="btn">
            <NavLink className={styles.navLink} to="pants">
              Show all pants
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};
