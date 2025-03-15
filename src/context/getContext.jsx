import { createContext, useState, useContext, useEffect } from "react";

// Create Context
const PropertyContext = createContext();

// Provider Component
export const PropertyProvider = ({ children }) => {
  // Load initial state from local storage or default to an empty object
  const getInitialState = () => {
    const savedProperty = localStorage.getItem("selectedProperty");
    return savedProperty ? JSON.parse(savedProperty) : {};
  };

  const [selectedProperty, setSelectedProperty] = useState(getInitialState);

  // Save to local storage whenever `selectedProperty` changes
  useEffect(() => {
    localStorage.setItem("selectedProperty", JSON.stringify(selectedProperty));
  }, [selectedProperty]);

  return (
    <PropertyContext.Provider value={{ selectedProperty, setSelectedProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

// Custom Hook
export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error("useProperty must be used within a PropertyProvider");
  }
  return context;
};
