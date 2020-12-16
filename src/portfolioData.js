import instaImg from "img/instagram.png";
import twitterImg from "img/twitter.png";
import musicalImg from "img/musical.png";

import instaclone1 from "img/instaclone1.png";
import instaclone2 from "img/instaclone2.png";
import instaclone3 from "img/instaclone3.png";

import twitterclone1 from "img/twitterclone1.png";
import twitterclone2 from "img/twitterclone2.png";
import twitterclone3 from "img/twitterclone3.png";

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
    "insta clone",
    "백엔드가 없는 정적페이지로 가상의 데이터를 제작해 놓고, 각 페이지 디자인 및 간단한 기능 구현.",
    "React를 이용한 페이지 제작.Redux를 이용한 상태관리.Material-UI를 이용한 Css작업",
    "#b34c9f",
    [instaclone1, instaclone2, instaclone3]
  ),
  projectObj(
    twitterImg,
    "https://github.com/lifeisegg123/cwitter",
    "twitter clone",
    "Firebase를 통한 백엔드 구현 및 로그인, 회원가입등의 인증 시스템과, 이미지 및 트윗 저장기능 구현.",
    "React를 이용한 페이지 제작.Firebase를 이용한 인증, 로그인, 회원가입, DB등 백엔드 구성",
    "#00b0ec",
    [twitterclone1, twitterclone2, twitterclone3],
    "https://lifeisegg123.github.io/cwitter"
  ),
  projectObj(
    musicalImg,
    "https://github.com/lifeisegg123/musical_review",
    "musical review",
    "페이지 디자인 및 백엔드 개발자와 협업하여, 뮤지컬 리뷰 및 관련정보 조회 및 검색 기능 구현, 관리자용 페이지 개발.",
    "React를 이용한 페이지 제작.Redux를 이용한 상태관리 및 Redux-saga를 이용한 비동기처리.Styled-Component를 이용한 Css작업",
    "#383FE8"
  ),
];
export default portFolioData;
