import Button from '../../UI/Button';

import styles from './Trend.module.scss';
import '../../index.scss';

export const Trend = () => {
  return (
    <section className={styles.trend}>
      <div className={`container ${styles.trendContainer}`}>
        <h3 className={`section-title ${styles.trendTitle}`}>
          Stay in trend with sportif
        </h3>
        <div className={styles.trendCards}>
          <div className={styles.trendCard}>
            <div className={styles.trendCardImgWrapper}>
              <img src="./img/belts.png" alt="Belts" />
            </div>
            <h5 className="cardTitle">Don't Forget a Belt</h5>
            <Button className={`btn ${styles.trendBtn}`}>Shop all belts</Button>
          </div>
          <div className={styles.trendCard}>
            <div className={styles.trendCardImgWrapper}>
              <img src="./img/swim-trunks.png" alt="Swim trunks" />
            </div>
            <h5 className="cardTitle">Swim Trunk Styles on Sale</h5>
            <Button className={`btn ${styles.trendBtn}`}>
              Shop all swim trunks
            </Button>
          </div>
          <div className={styles.trendCard}>
            <div className={styles.trendCardImgWrapper}>
              <img src="./img/home-catalog.png" alt="Catalog" />
            </div>
            <h5 className="cardTitle">Shop Newest Online Catalog</h5>
            <Button className={`btn ${styles.trendBtn}`}>
              Shop newest catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Trend;
