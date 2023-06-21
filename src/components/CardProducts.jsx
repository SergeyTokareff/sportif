import { useContext } from 'react';

import { MyContext } from '../context/MyContext';

import styles from './CardProducts.module.scss';

const CardProducts = ({category}) => {
  const { filteredProducts } = useContext(MyContext);
  const searchFiltered = filteredProducts(category);
  

  return (
    <div className={styles.cardProducts}>
      {searchFiltered.map((product, index) => (
        <div key={index}>
          <div className={styles.wrapperImg}>
            <img src={product.image} alt={product.image} />
          </div>
          <h4>{product.description}</h4>
          <div></div>
          <div>{product.price}</div>
          <div></div>
          <button></button>
        </div>
      ))}
    </div>
  );
};

export default CardProducts;
