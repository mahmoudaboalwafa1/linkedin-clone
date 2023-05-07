import React from "react";
import * as LoginStyle from "../Login/loginStyle";
import { loginLogo } from "../../images/index";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { Nav, ContainerNav } = LoginStyle;

  return (
    <Nav>
      <img src={loginLogo} />
      <ContainerNav>
        <NavLink to="/join">join now</NavLink>
        <NavLink to="/signin">sign in</NavLink>
      </ContainerNav>
    </Nav>
  );
};

export default Navbar;
