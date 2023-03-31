import React, { createContext, useContext, useState } from 'react';

export const HomeContext = createContext({});

export const HomeContextProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
      }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeStateContext = () => useContext(HomeContext);