import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import RequireAuth from "./components/RequireAuth";
import Signin from "./components/Login/Signin";
import Join from "./components/Login/Join";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
