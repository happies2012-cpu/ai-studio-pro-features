import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const ProContext = createContext();

export const usePro = () => {
  return useContext(ProContext);
};

export const ProProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [isPro, setIsPro] = useState(currentUser?.isPro || false);

  const upgradeToPro = () => {
    setIsPro(true);
    // In a real app, you would update the user in your backend
  };

  const value = {
    isPro,
    upgradeToPro
  };

  return (
    <ProContext.Provider value={value}>
      {children}
    </ProContext.Provider>
  );
};
