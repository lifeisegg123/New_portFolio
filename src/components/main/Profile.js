import React from "react";
import Title from "./Title";

import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai";
import styled from "styled-components";

const Profile = () => {
  return (
    <div id="profile">
      <Title>Profile</Title>
      <Wrapper>
        <ProfileContainer>
          <SemiTitleContainer>
            <h4>이 정 재</h4>
            Lee.Jung.Jae
          </SemiTitleContainer>
          <DescContainer>
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
          </DescContainer>
        </ProfileContainer>
        <ProfileContainer>
          <SemiTitleContainer>
            <h4>Introduce</h4>
          </SemiTitleContainer>
          <DescContainer>
            저는 학과 전공동아리에서 로봇 관련 프로그래밍을 하며 프로그래밍에
            관심이 생겼고, 취미로 시작한 웹개발이 적성에 맞아 프론트엔드
            개발자로 취업을 준비하고 있습니다.
            <br />
            <br />
            비전공자로써 전공지식이 부족한 부분이 있겠지만, 개인시간을 활용하여
            지속적으로 공부하고 있고, 새로운 기술들에 대한 관심이 많습니다.
            <br />
            <br />
            미약하지만 협업에 대한 경험도 있고, 현재까지 Python, C++,
            JavaScript를 다루어 보았습니다.
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
`;
const DescContainer = styled.span`
  width: 75%;
`;
