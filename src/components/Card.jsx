import { useState } from 'react';

import CardColors from './CardColors';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import { ReactComponent as Icon } from '../cart-icon.svg';

import styles from './Card.module.scss';

const Card = ({ product, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = (event) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className={styles.card} key={index}>
      <div className={styles.wrapperImg}>
        <img src={product.image} alt={product.image} />
      </div>
      <h4 className={styles.cardTitle}>{product.description}</h4>
      <div className={styles.cardStars}>
        <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
        <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
        <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
        <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
        <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
      </div>
      <div className={styles.cardPrice}>
        As low as <span>${product.price}</span>
      </div>
      <CardColors product={product} />
      <Button onClick={openModalHandler} className={`btn ${styles.cardButton}`}>
        <Icon />
        Add to cart
      </Button>
      <Modal product={product} isOpen={isModalOpen} onClose={closeModalHandler} />
    </div>
  );
};

export default Card;
