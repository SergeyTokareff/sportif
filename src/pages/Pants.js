// import { useContext } from 'react';
import CardProducts from '../components/CardProducts';
import Breadcrumbs from '../UI/Breadcrumbs';
import SearchProduct from '../UI/SearchProduct';

// import { MyContext } from '../context/MyContext';

const Pants = () => {
  return (
    <main>
      <div className="topPage">
        <Breadcrumbs />
        <SearchProduct />
      </div>
      <CardProducts category="pants" />
    </main>
  );
};

export default Pants;
