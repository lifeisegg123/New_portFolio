import instaImg from "img/instagram.png";
import twitterImg from "img/twitter.png";
import musicalImg from "img/musical.png";
import deltaImg from "img/deltalogo.png";
import shipImg from "img/shiplogo.png";

import instaclone1 from "img/instaclone1.png";
import instaclone2 from "img/instaclone2.png";
import instaclone3 from "img/instaclone3.png";

import twitterclone1 from "img/twitterclone1.png";
import twitterclone2 from "img/twitterclone2.png";
import twitterclone3 from "img/twitterclone3.png";

import delta1 from "img/delta1.jpg";
import delta2 from "img/delta2.jpg";

import ship1 from "img/autonomous_ship1.png";

const projectObj = (
  logo,
  github,
  title,
  desc,
  skill,
  backgroundColor,
  imgs,
  link
) => ({
  logo,
  github,
  title,
  desc,
  skill,
  backgroundColor,
  imgs,
  link,
});
const portFolioData = [
  projectObj(
    instaImg,
    "https://github.com/lifeisegg123/insta-clone",
    "Insta Clone",
    "백엔드가 없는 정적페이지로 가상의 데이터를 제작해 놓고, 각 페이지 디자인 및 간단한 기능 구현.",
    "React를 이용한 페이지 제작.Redux를 이용한 상태관리.Material-UI를 이용한 Css작업",
    "#b34c9f",
    [instaclone1, instaclone2, instaclone3]
  ),
  projectObj(
    twitterImg,
    "https://github.com/lifeisegg123/cwitter",
    "Twitter Clone",
    "Firebase를 통한 백엔드 구현 및 로그인, 회원가입등의 인증 시스템과, 이미지 및 트윗 저장기능 구현.",
    "React를 이용한 페이지 제작.Firebase를 활용하여 인증, 로그인, 회원가입, DB등 백엔드 구성",
    "#00b0ec",
    [twitterclone1, twitterclone2, twitterclone3],
    "https://lifeisegg123.github.io/cwitter"
  ),
  projectObj(
    musicalImg,
    "https://github.com/lifeisegg123/musical_review",
    "Musical Review",
    "페이지 디자인 및 백엔드 개발자와 협업하여, 뮤지컬 리뷰 및 관련정보 조회 및 검색 기능 구현, 관리자용 페이지 개발.",
    "React를 이용한 페이지 제작.Redux, Redux-saga를 활용한 상태관리 및 비동기처리.Styled-Component를 이용한 Css작업",
    "#383FE8"
  ),
  projectObj(
    deltaImg,
    "https://github.com/lifeisegg123/delta_robot",
    "Delta Robot",
    "웹캠으로 취득한 영상 내에 사람의 얼굴을 인식하고 이를 토대로 그림을 그리는 델타로봇 제작.영상처리 알고리즘 개발과 취득영상내의 정보를 통한 모터 좌푯값 계산, UI제작 담당",
    "OpenCV기반 영상처리 알고리즘 구현.QT를 이용한 UI구성.Python을 활용한 모터제어",
    "#cf001b",
    [delta1, delta2]
  ),
  projectObj(
    shipImg,
    "https://github.com/lifeisegg123/autonomous_ship",
    "Autonomous Ship",
    "2020Kaboat 참가를 위한 선박의 자율운항 알고리즘 개발. 센서 및 모터의 연결, PC와 Raspberry Pi간 통신, LiDAR를 이용한 자율운항 알고리즘 제작.",
    "ROS를 이용한 PC와 Raspberry Pi의 통신.Python기반의 센서 및 모터 구동",
    "#fed350",
    [ship1]
  ),
];
export default portFolioData;
