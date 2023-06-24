import React, { createContext, useContext, useState } from "react";

const InputsApi = createContext();

const InputsProvider = ({ children }) => {
  const [InputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
    message: "",
    imgUpload: "",
  });
  return (
    <InputsApi.Provider value={{ InputsValue, setInputsValue }}>
      {children}
    </InputsApi.Provider>
  );
};

const useInputsValue = () => {
  return useContext(InputsApi);
};

export { InputsProvider, useInputsValue };
