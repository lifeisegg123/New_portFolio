import React from "react";
import styled from "styled-components";
import Title from "./Title";

import cppImg from "img/C++.png";
import pythonImg from "img/python.png";
import jsImg from "img/JS.png";
import cssImg from "img/CSS.png";
import htmlImg from "img/HTML.png";

import reactImg from "img/react.png";
import reduxImg from "img/redux.png";
import styledComponentImg from "img/styledComponent.png";

import gitImg from "img/git.png";
import figmaImg from "img/figma.png";

const Skill = () => {
  const languages = [
    [htmlImg, "HTML"],
    [cssImg, "CSS"],
    [jsImg, "JavaScript"],
    [cppImg, "C++"],
    [pythonImg, "Python"],
  ];
  const libraries = [
    [reactImg, "React"],
    [reduxImg, "Redux"],
    [styledComponentImg, "Styled-Component"],
  ];
  const tools = [
    [gitImg, "Git"],
    [figmaImg, "Figma"],
  ];
  return (
    <>
      <Title>Skill</Title>
      <SkillContainer>
        <ContentsContainer>
          <h4>Language</h4>
          {languages.map(([img, name]) => (
            <ItemContainer>
              <img src={img} alt={name} />
              <p>{name}</p>
            </ItemContainer>
          ))}
        </ContentsContainer>
        <ContentsContainer>
          <h4>Library</h4>
          {libraries.map(([img, name]) => (
            <ItemContainer>
              <img src={img} alt={name} />
              <p>{name}</p>
            </ItemContainer>
          ))}
        </ContentsContainer>
        <ContentsContainer>
          <h4>Tool</h4>
          {tools.map(([img, name]) => (
            <ItemContainer>
              <img src={img} alt={name} />
              <p>{name}</p>
            </ItemContainer>
          ))}
        </ContentsContainer>
      </SkillContainer>
    </>
  );
};

export default Skill;

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ContentsContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & h4 {
    margin-bottom: 10px;
  }
`;
const ItemContainer = styled.span`
  display: flex;
  align-items: center;
  & img {
    width: 45px;
    height: 45px;
    margin: 5px 15px 5px 0;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;
