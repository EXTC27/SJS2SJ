import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  body {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* IE/Edge */
    user-select: none;    
  }
  a {
   text-decoration: none;
   color: black;
  }
  .pointer {
    @media screen and (min-width: 751px){
      cursor: pointer;
    }
  }

  .font {
    font-family: 'Noto Sans KR', sans-serif;
    &.mapo {
      font-family: 'MapoGoldenPier';
    }
    width: fit-content;
  }

`;
export default GlobalStyle;
