import CardColors from './CardColors';
import Button from '../UI/Button';
import { ReactComponent as Icon } from '../cart-icon.svg';


import styles from './Card.module.scss';

const Card = ({ product, index }) => {
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
      <Button className={`btn ${styles.cardButton}`}>
        <Icon />
        Add to cart
      </Button>
    </div>
  );
};

export default Card;
