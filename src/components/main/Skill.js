import React from "react";
import styled, { css } from "styled-components";
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
import firebaseImg from "img/firebase.png";
import figmaImg from "img/figma.png";

const Skill = () => {
  const languages = [
    [htmlImg, "HTML", "Expert"],
    [cssImg, "CSS", "Advanced"],
    [jsImg, "JavaScript", "Expert"],
    [cppImg, "C++", "Advanced"],
    [pythonImg, "Python", "Advanced"],
  ];
  const libraries = [
    [reactImg, "React", "Expert"],
    [reduxImg, "Redux", "Advanced"],
    [styledComponentImg, "Styled-Component", "Advanced"],
  ];
  const tools = [
    [gitImg, "Git", "Advanced"],
    [firebaseImg, "Firebase", "Beginner"],
    [figmaImg, "Figma", "Beginner"],
  ];
  return (
    <div id="skill">
      <Title>Skill</Title>
      <SkillContainer>
        <ContentsContainer>
          <h4>Language</h4>
          {languages.map(([img, name, level]) => (
            <ItemContainer key={`${img} ${name}`} level={level}>
              <img src={img} alt={name} />
              <p>{name}</p>
            </ItemContainer>
          ))}
        </ContentsContainer>
        <ContentsContainer>
          <h4>Library</h4>
          {libraries.map(([img, name, level]) => (
            <ItemContainer key={`${img} ${name}`} level={level}>
              <img src={img} alt={name} />
              <p>{name}</p>
            </ItemContainer>
          ))}
        </ContentsContainer>
        <ContentsContainer>
          <h4>Tool</h4>
          {tools.map(([img, name, level]) => (
            <ItemContainer key={`${img} ${name}`} level={level}>
              <img src={img} alt={name} />
              <p>{name}</p>
            </ItemContainer>
          ))}
        </ContentsContainer>
      </SkillContainer>
    </div>
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
  gap: 15px;
  & h4 {
    margin-bottom: 10px;
  }
`;
const FlexBox = css`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemContainer = styled.span`
  ${FlexBox}
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  & img {
    width: 55px;
    height: 55px;
    margin: 5px 0;
  }
  & p {
    width: 185px;
    text-align: center;
  }
  &:hover {
    &::before {
      ${FlexBox}
      position: absolute;
      height: 65px;
      content: "${(props) => props.level}";
      color: white;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 5px;
    }
  }
`;
