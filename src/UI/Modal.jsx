import { RiCloseLine } from 'react-icons/ri';
import { ReactComponent as Icon } from '../cart-icon.svg';

import Button from './Button';
import RadioDivs from './RadioDivs';

import styles from './Modal.module.scss';
import stylesCard from '../components/Card.module.scss';
import '../vars.scss';

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) {
    return null;
  }

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <Button onClick={onClose} className={styles.modalCloseBtn}>
          <RiCloseLine />
        </Button>
        <div className={styles.modalImg}>
          <div className={styles.modalWrapperImg}>
            <img src={product.image} alt="Product" />
          </div>
        </div>
        <div className={styles.modalText}>
          <h4 className={styles.modalTitle}>{product.description}</h4>
          <div className={styles.stars}>
            <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
            <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
            <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
            <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
            <img src="./img/svg/yellow-star.svg" alt="Yellow star" />
          </div>
          <div className={styles.modalPrice}>
            As low as <br />
            <span>${product.price}</span>
          </div>
          <div>
            <p className={styles.modalLabel}>Color:</p>
            {
              <RadioDivs
                product={product}
                opt={'color'}
                className={styles.modalColors}
              />
            }
          </div>
          <div className={styles.modalLabel}>
            <p className={styles.modalLabel}>Size:</p>
            <RadioDivs
              product={product}
              opt={'size'}
              className={styles.modalSizes}
            />
          </div>
          <Button
            className={`btn ${stylesCard.cardButton} ${styles.modalButton}`}
          >
            <Icon />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
