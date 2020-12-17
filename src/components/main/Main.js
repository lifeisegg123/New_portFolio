import React, { useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import PortFolio from "./PortFolio";
import Profile from "./Profile";
import Skill from "./Skill";
import Timeline from "./Timeline";

const Main = () => {
  const contentsRef = useRef();
  return (
    <Wrapper>
      <Container>
        <Header contentsRef={contentsRef}></Header>
        <div ref={contentsRef}>
          <Profile></Profile>
          <Timeline></Timeline>
          <Skill></Skill>
          <PortFolio></PortFolio>
        </div>
        <Footer>
          <p>ⓒ 2020 이정재 all rights reserved</p>
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 80%;
  position: relative;
  z-index: 1;
  margin: 100vh auto 100px auto;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  margin: auto;
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Footer = styled.footer`
  padding: 10px 0;
  & p {
    margin: 30px auto 30px auto;
  }
`;
