import React from "react";
import logoLinkedIn from "../../images/linkedin.png";
import { FaSearch } from "react-icons/fa";
import { Container } from "react-bootstrap";
import IconsHeader from "./IconsHeader";
import { Form, HeaderLinked, ImgLinked, NavItems } from "./headerStyle";

const Header = () => {
  return (
    <HeaderLinked>
      <Container>
        <div>
          <ImgLinked src={logoLinkedIn} alt="logo-linkedin" />
          <Form onSubmit={(e) => e.preventDefault()}>
            <FaSearch />
            <input type="search" placeholder="search" />
          </Form>
        </div>
        <NavItems>
          <IconsHeader />
        </NavItems>
      </Container>
    </HeaderLinked>
  );
};

export default Header;
