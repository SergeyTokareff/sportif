import Button from '../../UI/Button';

import styles from './Legacy.module.scss';
import '../../index.scss';

export const Legacy = () => {
  return (
    <section className={styles.legacy}>
      <div className={`${styles.legacyContainer} container`}>
        <img
          className={styles.legacyImg}
          src="./img/50years.png"
          alt="50 yaers"
        />
        <h3 className="section-title">Family owned legacy</h3>
        <p className={styles.legacyText}>
          We are proud to celebrate over 50 years of excellence as a family
          owned and operated business.
        </p>
        <Button className={`${styles.legacyBtn} btn`}>About us</Button>
      </div>
    </section>
  );
};
