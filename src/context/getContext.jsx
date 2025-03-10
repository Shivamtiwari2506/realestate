import { createContext, useState, useContext } from "react";

// Create Context
const PropertyContext = createContext();

// Provider Component
export const PropertyProvider = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState({});

  return (
    <PropertyContext.Provider value={{selectedProperty, setSelectedProperty}}>
      {children}
    </PropertyContext.Provider>
  );
};


export const useProperty = ()=> useContext(PropertyContext);
