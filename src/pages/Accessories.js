import CardProducts from '../components/CardProducts';
import Breadcrumbs from '../UI/Breadcrumbs';
import SearchProduct from '../UI/SearchProduct';

import '../index.scss';

const Accessories = () => {
  return (
    <main>
      <section className="container categoryContainer">
        <div className="topPage">
          <Breadcrumbs />
          <SearchProduct />
        </div>
        <div className='products'>
          <CardProducts category="Accessories" />
        </div>
      </section>
    </main>
  );
};

export default Accessories;
