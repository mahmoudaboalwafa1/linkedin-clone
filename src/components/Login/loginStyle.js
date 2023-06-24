import styled from "styled-components";

// start Navbar //
const Nav = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  & > img {
    width: 100px;
  }
`;
const ContainerNav = styled.div`
  padding-right: 20%;

  a {
    margin-right: 20px;
    font-size: 0.8rem;
  }
`;

// end Navbar //

// start Landing //
const Landing = styled.section`
  margin-top: 50px;
`;
const Container = styled.div`
  width: 90%;
  margin: auto;
`;
const Hero = styled.h1`
  color: var(--blue-color);
  max-width: 350px;
  line-height: 1.3;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    margin: 10px auto;
    text-align: center;
    font-size: 1rem;
  }
`;
const ContainerLand = styled.div`
  width: 90%;
  margin: 50px;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      margin: 10px 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Google = styled.a`
  display: flex;
  align-items: center;
  border: solid 2px black;
  border-radius: 20px;
  padding: 10px 50px;
  width: 300px;
  height: 60px;
  color: black;
  font-size: 0.7rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  & > img {
    margin-right: 10px;
  }
`;

const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div.alert {
    position: unset;
    width: unset;
    margin-top: 15px;
  }

  form {
    width: 100%;

    div {
      display: flex;
      justify-content: center;
      padding-top: 20px;
    }
  }
`;
const TitleMain = styled.h2``;

export {
  Nav,
  ContainerNav,
  Landing,
  Container,
  Hero,
  ContainerLand,
  Google,
  LoginMain,
  TitleMain,
};
// End Landing //
