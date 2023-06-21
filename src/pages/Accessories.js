import CardProducts from '../components/CardProducts';
import Breadcrumbs from '../UI/Breadcrumbs';
import SearchProduct from '../UI/SearchProduct';


const Accessories = () => {
  return (
    <main>
      <div className="topPage">
        <Breadcrumbs />
        <SearchProduct />
      </div>
      <CardProducts category="Accessories" />
    </main>
  );
};

export default Accessories;
