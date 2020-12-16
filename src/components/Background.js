import React from "react";
import styled from "styled-components";

import backImg from "img/computer.png";
const Background = () => {
  return (
    <Wrapper>
      <Container>
        <img src={backImg} alt="" />
        <h1>Hi. I'm J.J.Lee</h1>
      </Container>
    </Wrapper>
  );
};

export default Background;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #3678c2;
  display: flex;
  align-items: center;
  color: white;
`;

const Container = styled.div`
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & img {
    height: 500px;
  }
`;
