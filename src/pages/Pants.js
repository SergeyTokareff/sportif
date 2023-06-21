import CardProducts from '../components/CardProducts';
import Breadcrumbs from '../UI/Breadcrumbs';
import SearchProduct from '../UI/SearchProduct';
import FilterSidebar from '../components/FilterSidebar';

import '../index.scss';

const Pants = () => {
  return (
    <main>
      <section className="container categoryContainer">
        <div className="topPage">
          <Breadcrumbs />
          <SearchProduct />
        </div>
        <div className='products'>
          <FilterSidebar />
          <CardProducts category="pants" />
        </div>
      </section>
    </main>
  );
};

export default Pants;
