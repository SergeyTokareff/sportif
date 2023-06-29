import { useContext } from 'react';

import { MyContext } from '../context/MyContext';
import Card from './Card';

import styles from './CardProducts.module.scss';

const CardProducts = ({ category }) => {
  const { filteredProducts } = useContext(MyContext);
  const searchFiltered = filteredProducts(category);

  return (
    <div className={styles.cardProducts}>
      {searchFiltered.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
};

export default CardProducts;
