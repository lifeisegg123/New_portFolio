import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Jeju Gothic', sans-serif;
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
`;
export default GlobalStyle;
