import { Routes, Route } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Main from './Main';
import Shorts from './pages/Shorts';
import Pants from './pages/Pants';
import Shirts from './pages/Shirts';
import Accessories from './pages/Accessories';
import Sale from './pages/Sale';
import MyContext from './context/MyContext';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <MyContext>
          <Routes>
            <Route path="/" element={<MainLayout />} exact>
              <Route path="/" element={<Main />} exact />
              <Route path="shorts" element={<Shorts />} exact />
              <Route path="pants" element={<Pants />} exact />
              <Route path="shirts" element={<Shirts />} exact />
              <Route path="accessories" element={<Accessories />} exact />
              <Route path="sale" element={<Sale />} exact />
            </Route>
          </Routes>
        </MyContext>
      </div>
    </div>
  );
}

export default App;
