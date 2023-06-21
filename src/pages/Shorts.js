import SearchProduct from '../UI/SearchProduct';
import CardProducts from '../components/CardProducts';
import Breadcrumbs from '../UI/Breadcrumbs';
import FilterSidebar from '../components/FilterSidebar';

import '../index.scss';


const Shorts = ({ searchFiltered }) => {
  return (
    <main>
      <section className="container categoryContainer">
        <div className="topPage">
          <Breadcrumbs />
          <SearchProduct />
        </div>

        <div className="products">
          <FilterSidebar />
          <CardProducts category="short" />
        </div>
      </section>
    </main>
  );
};

export default Shorts;
