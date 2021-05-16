import React, { FC } from "react";
import styled from "styled-components";
import Title from "./Title";

import cppImg from "img/C++.png";
import pythonImg from "img/python.png";
import jsImg from "img/JS.png";
import cssImg from "img/CSS.png";
import htmlImg from "img/HTML.png";
import typescriptImg from "img/typescript.png";

import reactImg from "img/react.png";
import reduxImg from "img/redux.png";
import styledComponentImg from "img/styledComponent.png";
import nextImg from "img/next.png";
import nestImg from "img/nest.png";
import expressImg from "img/express.png";
import emotionImg from "img/emotion.png";

import gitImg from "img/git.png";
import firebaseImg from "img/firebase.png";
import figmaImg from "img/figma.png";
import mongoImg from "img/mongo.png";
import mysqlImg from "img/mysql.png";
import dockerImg from "img/docker.png";
import kubernetesImg from "img/kubernetes.png";

import { FlexBox } from "components/styles/FlexBox";

const Skill: FC = () => {
  const languages = [
    [jsImg, "JavaScript", "Expert"],
    [htmlImg, "HTML", "Expert"],
    [cssImg, "CSS", "Advanced"],
    [cppImg, "C++", "Advanced"],
    [pythonImg, "Python", "Advanced"],
    [typescriptImg, "TypeScript", "Advanced"],
  ];
  const libraries = [
    [reactImg, "React", "Expert"],
    [nextImg, "Next.js", "Expert"],
    [reduxImg, "Redux", "Expert"],
    [styledComponentImg, "Styled-Component", "Expert"],
    [emotionImg, "Emotion.js", "Advanced"],
    [expressImg, "express.js", "Expert"],
    [nestImg, "Nest.js", "Beginner"],
  ];
  const tools = [
    [gitImg, "Git", "Advanced"],
    [mongoImg, "Mongo DB", "Advanced"],
    [dockerImg, "Docker", "Advanced"],
    [kubernetesImg, "Kubernetes", "Beginner"],
    [mysqlImg, "MySql", "Beginner"],
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
  & h4 {
    margin: 10px 0;
  }
`;

const ItemContainer = styled.span<{ level: string }>`
  ${FlexBox}
  margin: 7px 0;
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
