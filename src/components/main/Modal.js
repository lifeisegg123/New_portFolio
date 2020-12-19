import React from "react";
import { AiFillCloseCircle, AiFillGithub, AiOutlineLink } from "react-icons/ai";
import styled from "styled-components";

const Modal = ({
  logo,
  github,
  title,
  desc,
  skill,
  backgroundColor,
  imgs,
  link,
  closeModal,
}) => {
  return (
    <>
      <Background onClick={closeModal}></Background>
      <Wrapper>
        <CloseButton onClick={closeModal}>
          <AiFillCloseCircle />
        </CloseButton>
        <TitleBox backgroundColor={backgroundColor}>
          <img src={logo} alt={title} />
          <h2>{title}</h2>
        </TitleBox>
        <ContentsBox>
          {imgs && (
            <ImgGrid>
              {imgs.map((img, index) => (
                <img src={img} key={`&{img}_${index}`} alt={index} />
              ))}
            </ImgGrid>
          )}
          <DescBox>
            <h4>Description</h4>
            <p>{desc}</p>
            <h4>Skill</h4>
            <ul>
              {skill.split(".").map((value) => (
                <li key={value}>
                  <p>{value}</p>
                </li>
              ))}
            </ul>
          </DescBox>
        </ContentsBox>
        <LinkBox>
          <Link href={github}>
            <AiFillGithub />
            github
          </Link>
          {link && (
            <Link href={link}>
              <AiOutlineLink />
              link
            </Link>
          )}
        </LinkBox>
      </Wrapper>
    </>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
`;
const Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 90vh;
  min-height: 550px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;
const TitleBox = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  gap: 10px;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  & img {
    width: 50px;
    height: 50px;
  }
`;
const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  & svg {
    font-size: 30px;
  }
`;
const FloatingBox = styled.span`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
const ImgGrid = styled(FloatingBox)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  & img {
    width: 10vw;
    height: 10vw;
    transition: 0.3s;
    border-radius: 10px;
    &:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      transform: scale(2.7);
    }
  }
  @media only screen and (max-width: 768px) {
    & img {
      width: 100%;
      height: 35vw;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;
const DescBox = styled(FloatingBox)`
  width: 50%;
  & h4 {
    margin: 10px 0;
  }
  & ul {
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    & p {
      font-size: 11px;
    }
  }
`;
const ContentsBox = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    & ${FloatingBox} {
      width: 90%;
      margin: 5px 0;
    }
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 20px;
  border: none;
  width: auto;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
