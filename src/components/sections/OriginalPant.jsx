import styles from './OriginalPant.module.scss';
import Button from '../../UI/Button';

import '../../index.scss';

export const OriginalPant = () => {
  return (
    <section className={styles.originalPant}>
      <div className={`${styles.originalPantContainer} container`}>
        <h3 className={`section-title ${styles.originalPantTitle}`}>
          Sportif original pant
        </h3>
        <p className={styles.originalPantText}>
          Our classic nautical cargo pants are built to last and designed to
          exceed your expectations! Crafted from our stretch twill blend that
          offers the comfort of cotton, the wrinkle resistance of polyester and
          the mobility of Lycra®.
        </p>
        <Button className={`btn ${styles.originalPantBtn}`}>
          Shop sportif original pant
        </Button>
      </div>
    </section>
  );
};
