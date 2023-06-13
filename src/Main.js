import {
  ShortsSelling,
  Off,
  SellingPants,
  Service,
  OriginalPant,
  Trend,
  Legacy,
} from './components/sections/index.js';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <ShortsSelling />
      <Off />
      <SellingPants />
      <Service />
      <OriginalPant />
      <Trend />
      <Legacy />
    </main>
  );
};

export default Main;
