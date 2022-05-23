import { createContext, useState } from "react";

export const FieldContext = createContext();

export function FieldContextProvider({ children }) {
  const [fieldType, setField] = useState("Campo");

  function handleChange(value) {
    setField(value);
  }

  return (
    <FieldContext.Provider value={{ fieldType, setField, handleChange }}>
      {children}
    </FieldContext.Provider>
  );
}
