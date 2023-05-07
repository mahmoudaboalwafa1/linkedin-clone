import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import { InputsProvider } from "./Context/Inputs";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <InputsProvider>
      <App />
    </InputsProvider>
  </Provider>
);
