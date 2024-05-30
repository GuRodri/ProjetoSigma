import React, { createContext, useState, useContext } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ globalSearchTerm, setGlobalSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
