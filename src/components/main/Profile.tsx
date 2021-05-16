import React, { FC } from "react";
import Title from "./Title";
import imojiImg from "img/imoji.png";

import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai";
import styled from "styled-components";

const Profile: FC = () => {
  return (
    <div id="profile">
      <Title>Profile</Title>
      <Wrapper>
        <ProfileContainer>
          <SemiTitleContainer>
            <h3>이 정 재</h3>
            <p>Lee.Jung.Jae</p>
            <SmallText>감성한스푼 2020.12~</SmallText>
          </SemiTitleContainer>
          <DescContainer>
            <span>
              <ProfileImg src={imojiImg} alt="" />
            </span>
            <span>
              <InfoContainer>
                <AiFillMail />
                <p>leejj2002@naver.com</p>
              </InfoContainer>
              <InfoContainer>
                <AiFillPhone />
                <p>010-5499-9316</p>
              </InfoContainer>
              <InfoContainer>
                <AiFillGithub />
                <a href="https://github.com/lifeisegg123">
                  github.com/lifeisegg123
                </a>
              </InfoContainer>
            </span>
          </DescContainer>
        </ProfileContainer>
        <ProfileContainer>
          <SemiTitleContainer>
            <h3>Introduce</h3>
          </SemiTitleContainer>
          <DescContainer>
            학과 전공동아리에서 로봇 관련 프로그래밍을 하며 프로그래밍에 관심을
            가졌고, 취미로 시작한 웹개발이 적성에 맞아 웹 개발자로 일하고
            있습니다.
            <br />
            <br />
            퇴근 후 항상 새로운 것들을 공부하고, 사이드 프로젝트를 하며 적용 해
            보는 것을 즐깁니다.
            <br />
            <br />
            재사용 가능한 코드를 작성하는데 관심이 많고, 항상 고민하며 코드를
            작성하고 있습니다.
          </DescContainer>
        </ProfileContainer>
      </Wrapper>
    </div>
  );
};

export default Profile;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
`;
const InfoContainer = styled.span`
  display: flex;
  align-items: center;
  & svg {
    font-size: 1.3rem;
    margin-right: 10px;
  }
  & a {
    text-decoration: none;
    color: black;
  }
`;
const SemiTitleContainer = styled.span`
  width: 25%;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const DescContainer = styled.span`
  display: flex;
  align-items: center;
  width: 75%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const SmallText = styled.p`
  margin-top: 0.2rem;
  font-size: 0.5rem;
  color: #555555;
`;

const ProfileImg = styled.img`
  width: 5rem;
`;
