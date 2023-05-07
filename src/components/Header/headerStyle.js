import styled from "styled-components";

// Nav Without Links
const HeaderLinked = styled.header`
  position: fixed;
  padding: 10px;
  background-color: white;
  width: 100%;
  z-index: 999999;
  & div,
  .container {
    display: flex;
  }
`;
const ImgLinked = styled.img`
  margin-right: 10px;
`;
const Form = styled.form`
  width: 100%;
  background-color: #eef3f8;
  font-size: 16px;
  display: flex;
  align-items: center;
  border-radius: 3px;

  & > input {
    background-color: transparent;
    width: 100%;
  }
  & > svg {
    margin: 0 10px 0 20px;
    font-size: 14px;
  }
`;
const NavItems = styled.nav`
  display: flex;
  position: fixed;
  right: 10%;
  top: 2px;
  @media (max-width: 1130px) {
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    right: 0;
    top: unset;
    bottom: 0;
    background-color: white;
    z-index: 999;

    button {
      top: -45px !important;
    }
  }

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 2px;
    position: relative;
    padding: 0 15px;

    @media (min-width: 768px) and (max-width: 1192px) {
      padding: 0 20px;
    }

    @media (max-width: 873px) {
      padding: 0 15px;
      > a {
        top: 0;
        bottom: -100px;
      }
    }

    & button {
      background-color: white;
      padding: 10px 5px;
      border-radius: 6px;
      display: none;
    }

    :nth-child(6)::after {
      content: "";
      position: absolute;
      background-color: #ebebeb;
      height: 100%;
      width: 1px;
      right: 0;
    }
    :nth-child(6) {
      padding-right: 20px;
    }
    :nt-child(7) {
      padding-left: 20px;
    }
    & > li {
      font-size: 14px;
    }

    svg,
    li {
      cursor: pointer;
    }

    img.user {
      width: 23px;
      border-radius: 50%;
    }
  }
`;

// Links Styling

const NavLink = styled.ul``;

export { HeaderLinked, Form, ImgLinked, NavItems, NavLink };
