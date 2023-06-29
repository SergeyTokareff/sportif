import CardProducts from '../components/CardProducts';
import Breadcrumbs from '../UI/Breadcrumbs';
import SearchProduct from '../UI/SearchProduct';

import '../index.scss';

const Shirts = () => {
  return (
    <main>
      <section className="container categoryContainer">
      <div className="topPage">
        <Breadcrumbs />
        <SearchProduct />
        </div>
      <div className='products'>
      <CardProducts category="shirt" />
      </div>
      </section>
    </main>
  );
};

export default Shirts;
