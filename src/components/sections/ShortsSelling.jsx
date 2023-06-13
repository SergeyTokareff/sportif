import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../UI/Button';

import styles from './ShortsSelling.module.scss';
import '../../index.scss';

export const ShortsSelling = ({ className }) => {
  return (
    <section className={styles.shortsSelling}>
      <div className={`${styles.shortsSellingContainer} container`}>
        <div className={styles.shortsSellingText}>
          <h2 className={`section-title ${styles.shortsSellingTitle}`}>
            Best selling skretch shorts
          </h2>
          <p className={styles.shortsSellingSubtitle}>
            Get the perfect fit with 6 different inseam lengths
          </p>
          <Button className="btn">
            <NavLink className={styles.navLink} to="shorts">
              Show all shorts
            </NavLink>
          </Button>
        </div>
        <div className={styles.shortsSellingImg}>
          <div
            className={styles.shortsSellingBox + ' ' + styles.transparentBox}
          ></div>
          <div className={styles.shortsSellingBox + ' ' + styles.redBox}></div>
          <div className={styles.shortsSellingPic}>
            <img src="./img/man.jpg" alt="Man" />
          </div>
        </div>
      </div>
    </section>
  );
};
