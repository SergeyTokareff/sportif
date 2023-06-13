import styles from './HeaderSearch.module.scss';

const HeaderSearch = () => {
  return (
    <div className={styles.headerSearch}>
      <button>
        <img src="./img/svg/search-icon.svg" alt="Search" />
      </button>
      <input className={styles.searchInput} type="text" placeholder="search entire store here" />
    </div>
  );
};

export default HeaderSearch;
