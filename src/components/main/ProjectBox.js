import React from "react";
import styled from "styled-components";

const ProjectBox = ({ backgroundColor, img, title, onClick }) => {
  return (
    <ProjectContainer onClick={onClick}>
      <ImgBox backgroundColor={backgroundColor}>
        <img src={img} alt={title} />
      </ImgBox>
      <DescBox>{title}</DescBox>
    </ProjectContainer>
  );
};

export default ProjectBox;
const ProjectContainer = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: translateY(-10%);
    transition: 0.5s;
    cursor: pointer;
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || "black"};
  & img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    background-color: none;
  }
`;
const DescBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
