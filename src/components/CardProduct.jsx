import { useContext } from 'react';

import { MyContext } from '../context/MyContext';

import styles from './CardProduct.module.scss';

const CardProduct = ({ category }) => {
  const { filteredProducts } = useContext(MyContext);

  const products = filteredProducts(category);

  return (
    <>
      {products.map((product, index) => (
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
    </>
  );
};

export default CardProduct;
