import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Title from "./Title";

const timelineObj = (date: string, desc: string) => ({ date, desc });
const timelines = [
  timelineObj("2019.03", "인하공업전문대학 입학"),
  timelineObj("2019.12", "프로그래밍 시작(파이썬)"),
  timelineObj("2020.04~07", "델타로봇 프로젝트"),
  timelineObj("2020.07", "웹개발 시작(HTML,CSS,JS), 정보처리 산업기사 취득"),
  timelineObj("2020.08", "자율 운항 선박 프로젝트, 인스타 클론"),
  timelineObj("2020.09", "트위터 클론"),
  timelineObj("2020.10~12", "뮤지컬 리뷰페이지 프로젝트"),
  timelineObj("2020.12~", "감성한스푼 재직중"),
  timelineObj("2021.02~2021.03", "주당 이선생 프로젝트"),
];

const Timeline = () => {
  const [clicked, setClicked] = useState(false);
  const [descIndex, setDescIndex] = useState<number | null>(0);
  const listRef = useRef(null);
  const handleClickEvent = (event: any) => {
    const target = timelines.findIndex(
      ({ date }) => date === event.currentTarget.lastChild.innerText
    );
    if (target !== descIndex) {
      setDescIndex(target);
    } else {
      setDescIndex(null);
    }
    setClicked(true);
  };
  useEffect(() => {
    const indexChanger = setInterval(() => {
      descIndex === timelines.length - 1
        ? setDescIndex(0)
        : setDescIndex(descIndex ?? +1);
    }, 2000);
    if (clicked) {
      clearInterval(indexChanger);
    }
    return () => clearInterval(indexChanger);
  }, [descIndex, clicked]);
  return (
    <div id="timeline">
      <Title>Timeline</Title>
      <TimelineList ref={listRef}>
        {timelines.map(({ date, desc }, index) => (
          <ListItem onClick={handleClickEvent} key={`${index}${desc}`}>
            <time>{date}</time>
            {index === descIndex && <p>{desc}</p>}
          </ListItem>
        ))}
      </TimelineList>
    </div>
  );
};

export default Timeline;

const circleAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.4);
  }
`;
const TimelineList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;
  margin-left: 50px;
  height: 500px;
  border-left: solid 5px #3678c2;
`;
const ListItem = styled.li`
  list-style: none;
  position: relative;
  padding-left: 10px;
  &:hover {
    cursor: pointer;
  }
  &::after {
    content: "";
    display: block;
    background-color: white;
    width: 8px;
    height: 8px;
    top: 0;
    left: -10px;
    position: absolute;
    border: solid 3px #3678c2;
    border-radius: 50%;
    animation: ${circleAnimation} 0.8s infinite linear alternate;
  }
  & p {
    margin-top: 20px;
  }
`;
