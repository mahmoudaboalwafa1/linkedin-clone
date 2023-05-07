import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mainTitle, linkInTitle } from "../data/Home";
import Header from "../components/Header/Header";
import { LeftSide, MainSide, RightSide } from "../components/Home";

const Home = () => {
  return (
    <>
      <Header />
      <MainLinked>
        <Maintitle>
          <Link to="#">{linkInTitle}</Link>
          {mainTitle}
        </Maintitle>
        <Container
          style={{
            padding: "0 10px",
            margin: "0",
            maxWidth: "100%",
            paddingTop: "40px",
          }}
        >
          <LeftSide />
          <MainSide />
          <RightSide />
        </Container>
      </MainLinked>
    </>
  );
};

const MainLinked = styled.section`
  background-color: var(--bg-body);
  padding-top: 100px;
  & div.container {
    display: flex;

    @media (max-width: 1090px) {
      flex-direction: column;
    }
  }
`;
const Maintitle = styled.h1`
  text-align: center;
  text-decoration: underline;
  font-size: 16px;
  margin-top: -20px;
  & > a {
    color: rgb(10, 102, 194);
  }
`;

export default Home;
