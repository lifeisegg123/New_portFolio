import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Skill from "./Skill";

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Profile></Profile>
        <Skill></Skill>
      </Container>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 80%;
  position: relative;
  z-index: 1;
  margin-top: 100vh;
  margin-left: auto;
  margin-right: auto;
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
