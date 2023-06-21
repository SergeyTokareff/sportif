import SearchProduct from '../UI/SearchProduct';
import CardProducts from '../components/CardProducts';
import Breadcrumbs from '../UI/Breadcrumbs';

import '../index.scss';

const Shorts = ({  searchFiltered }) => {
  return (
    <main>
      <div className="topPage">
        <Breadcrumbs />
        <SearchProduct category="short" searchFiltered={searchFiltered} />
      </div>

      <div className="products">
        <aside className="productFilters">fff</aside>
        <CardProducts category="short" />
      </div>
    </main>
  );
};

export default Shorts;
