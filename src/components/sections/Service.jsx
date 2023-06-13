import Button from '../../UI/Button';

import styles from './Service.module.scss';
import '../../index.scss';

export const Service = () => {
  return (
    <section className={styles.service}>
      <div className={`${styles.serviceContainer} container`}>
        <div className={styles.serviceLeft}>
          <div className={styles.serviceImgWrapper}>
            <img src="./img/shop-ecoths.jpg" alt="Man-left" />
            <div className={styles.serviceImgText}>Ecoths: now 30% off</div>
          </div>
          <p className={styles.serviceText}>
            Our entire Ecoths collection is on sale! Plus, for every Ecoths
            purchase we donate 3 meals to food banks across the United States.
            We’re over 400,000 meals in now.
          </p>
          <Button className={`btn ${styles.serviceButton}`}>
            Shop ecoths sale
          </Button>
        </div>
        <div className={styles.serviceRight}>
          <div className={styles.serviceImgWrapper}>
            <img src="./img/print-shirt.jpg" alt="Man-right" />
            <div className={styles.serviceImgText}>New powell print shirt</div>
          </div>
          <p className={styles.serviceText}>
            New from Old Ranch Brands, the Powell short sleeve print shirt! Look
            effortlessly sharp in this lightweight cotton shirt with a classic
            shape and convenient features.
          </p>
          <Button className={`btn ${styles.serviceButton}`}>
            Show powell short sleeve
          </Button>
        </div>
      </div>
    </section>
  );
};
