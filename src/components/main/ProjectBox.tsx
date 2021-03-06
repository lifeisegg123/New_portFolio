import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

interface ProjectBoxProps {
  backgroundColor: string;
  img: string;
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const ProjectBox: FC<ProjectBoxProps> = ({
  backgroundColor,
  img,
  title,
  onClick,
}) => {
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
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    &:hover {
      transform: translateY(-8%);
      transition: 0.5s;
    }
  }
`;
const ImgBox = styled.div<{ backgroundColor: string }>`
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
