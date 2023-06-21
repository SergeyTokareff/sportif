import { useContext } from 'react';

import { MyContext } from '../context/MyContext';

import styles from './SearchProduct.module.scss';

const SearchProduct = ({ category }) => {
  const { inputChangeHandler, searchQuery} =
    useContext(MyContext);

  return (
    <div className={styles.searchProducts}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default SearchProduct;
