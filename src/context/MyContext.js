import React, { createContext, useState, useEffect } from 'react';

import fetchData from '../API/fetchData';

export const MyContext = createContext();

const MyContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = (param) => {
    const filtered = products.filter((product) => product.title === param);
    return filtered;
  };

  return (
    <MyContext.Provider value={{ filteredProducts }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
