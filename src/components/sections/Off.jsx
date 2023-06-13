import { useState, useEffect } from 'react';

import Button from '../../UI/Button';
import { ReactComponent as Icon } from '../../cart-icon.svg';
import fetchData from '../../API/fetchData';

import styles from './Off.module.scss';
import '../../index.scss';

export const Off = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);

  const randomNumbers = [];
  if (data.length > 0) {
    while (randomNumbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * data.length);
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
  }

  return (
    <section className={styles.off}>
      <div className={`${styles.offContainer} container`}>
        <h3 className={`section-title ${styles.offTitle}`}>
          TGIF, INLET, AND MARCHAL'S COLLECTIONS
        </h3>
        <h4 className={styles.offSubtitle}>NOW 40% OFF!</h4>
        {data.length > 0 && (
          <div className={styles.offCards}>
            <div className={styles.offCard}>
              <img src={data[randomNumbers[0]].image} alt="Marshal" />
              <h5 className={`${styles.offCardTitle} cardTitle`}>
                {data[randomNumbers[0]].description}
              </h5>
              <div className={styles.cardBottom}>
                <div className={styles.cardStars}>
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                </div>
                <p className={styles.cardPrice}>
                  As low as <span>${data[randomNumbers[0]].price}</span>
                </p>
                <Button className={`btn ${styles.cardButton}`}>
                  <Icon />
                  Add to cart
                </Button>
              </div>
            </div>
            <div className={styles.offCard}>
              <img src={data[randomNumbers[1]].image} alt="" />
              <h5 className={`${styles.offCardTitle} cardTitle`}>
                {data[randomNumbers[1]].description}
              </h5>
              <div className={styles.cardBottom}>
                <div className={styles.cardStars}>
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                </div>
                <p className={styles.cardPrice}>
                  As low as <span>${data[randomNumbers[1]].price}</span>
                </p>
                <Button className={`btn ${styles.cardButton}`}>
                  <Icon />
                  Add to cart
                </Button>
              </div>
            </div>
            <div className={styles.offCard}>
              <img src={data[randomNumbers[2]].image} alt="" />
              <h5 className={`${styles.offCardTitle} cardTitle`}>
                {data[randomNumbers[2]].description}
              </h5>
              <div className={styles.cardBottom}>
                <div className={styles.cardStars}>
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                </div>
                <p className={styles.cardPrice}>
                  As low as <span>${data[randomNumbers[2]].price}</span>
                </p>
                <Button className={`btn ${styles.cardButton}`}>
                  <Icon />
                  Add to cart
                </Button>
              </div>
            </div>
            <div className={styles.offCard}>
              <img src={data[randomNumbers[3]].image} alt="" />
              <h5 className={`${styles.offCardTitle} cardTitle`}>
                {data[randomNumbers[3]].description}
              </h5>
              <div className={styles.cardBottom}>
                <div className={styles.cardStars}>
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                  <img src="./img/svg/yellow-star.svg" alt="Star" />
                </div>
                <p className={styles.cardPrice}>
                  As low as <span>${data[randomNumbers[3]].price}</span>
                </p>
                <Button className={`btn ${styles.cardButton}`}>
                  <Icon />
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
