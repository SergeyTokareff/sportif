import { useContext } from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import SearchProduct from '../UI/SearchProduct';
import CardProduct from '../components/CardProduct';

import { MyContext } from '../context/MyContext';

const Shorts = () => {
  // const filteredProducts = useContext(MyContext);

  // const products = filteredProducts('short');
  // console.log(products);

  return (
    <main>
      <div className="top">
        <div className="breadcrumbs">
           <NavLink to="/"><FaHome />Home</NavLink>{">"}
           Shorts
        </div>
        {/* <SearchProduct/> */}
        
      </div>

      <div>
        <CardProduct category="short" />
      </div>
    </main>
  );
};

export default Shorts;
