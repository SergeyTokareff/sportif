import React, { createContext, useState, useEffect } from 'react';

import fetchData from '../API/fetchData';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData()
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = (param) => {
    const filtered = filteredItems.filter((product) => product.title === param);
    return filtered;
  };

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  const filteredItems = searchQuery
    ? products.filter((product) =>
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;


  return (
    <MyContext.Provider
      value={{
        filteredProducts,
        filteredItems,
        inputChangeHandler,
        searchQuery
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
