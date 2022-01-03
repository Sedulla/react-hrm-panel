import { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleDrawer = () => {
    setNavOpen((prev) => !prev);
  };

  const values = {
    navOpen,
    setNavOpen,
    handleToggleDrawer
  };

  return <NavContext.Provider value={values}>{children}</NavContext.Provider>;
};

export const useNav = () => useContext(NavContext);