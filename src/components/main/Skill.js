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
import firebaseImg from "img/firebase.png";
import figmaImg from "img/figma.png";
import { FlexBox } from "components/styles/FlexBox";

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
  flex-wrap: wrap;
`;

const ContentsContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  & h4 {
    margin: 10px 0;
  }
`;

const ItemContainer = styled.span`
  ${FlexBox}
  width: 250px;
  position: relative;
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
  @media only screen and (max-width: 768px) {
    width: 140px;
    & img {
      width: 40px;
      height: 40px;
      margin: 5px 0;
    }
    & p {
      width: 90px;
      text-align: center;
      font-size: 12px;
    }
  }
  &:hover {
    &::before {
      ${FlexBox}
      width:100%;
      position: absolute;
      height: 100%;
      content: "${(props) => props.level}";
      color: white;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 5px;
    }
  }
`;
