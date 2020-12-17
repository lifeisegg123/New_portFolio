import { FlexBox } from "components/styles/FlexBox";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Header = ({ contentsRef }) => {
  const headerRef = useRef();
  const handleClick = (event) => {
    const target = document.querySelector(event.target.hash);
    window.scrollTo({
      top:
        target.offsetTop + window.innerHeight - headerRef.current.clientHeight,
      behavior: "smooth",
    });
    event.preventDefault();
  };
  const [scrollPosition, setScrollPosition] = useState(null);
  const handleHeaderHighlight = () => {
    const targetList = contentsRef.current.childNodes;
    if (
      window.scrollY >
      targetList[3].offsetTop + targetList[3].clientHeight / 2
    ) {
      setScrollPosition(3);
    } else if (
      window.scrollY >
      targetList[2].offsetTop + targetList[2].clientHeight / 2
    ) {
      setScrollPosition(2);
    } else if (
      window.scrollY >
      targetList[1].offsetTop + targetList[1].clientHeight / 2
    ) {
      setScrollPosition(1);
    } else if (
      window.scrollY >
      targetList[0].offsetTop + targetList[0].clientHeight / 2
    ) {
      setScrollPosition(0);
    } else {
      setScrollPosition(null);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderHighlight);
  });
  return (
    <Wrapper ref={headerRef}>
      <StyledA
        href="#profile"
        onClick={handleClick}
        activated={scrollPosition === 0}
      >
        Profile
      </StyledA>
      <StyledA
        href="#timeline"
        onClick={handleClick}
        activated={scrollPosition === 1}
      >
        Timeline
      </StyledA>
      <StyledA
        href="#skill"
        onClick={handleClick}
        activated={scrollPosition === 2}
      >
        Skill
      </StyledA>
      <StyledA
        href="#portfolio"
        onClick={handleClick}
        activated={scrollPosition === 3}
      >
        PortFolio
      </StyledA>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  margin-bottom: 30px;
  background-color: white;
`;
const StyledA = styled.a`
  ${FlexBox}
  width: 20%;
  padding: 5px 0;
  text-decoration: none;
  color: #b3b3b3;
  font-size: 1.5rem;

  ${(props) => props.activated && "color: black"}
`;
