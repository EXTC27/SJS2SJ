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
  img {
    pointer-events: none;
  }
  .pointer {
    @media screen and (min-width: 751px){
      cursor: pointer;
    }
  }

  .font {
    font-family: 'Noto Sans KR', sans-serif;
    width: fit-content;
  }

  b {
    font-weight: bold;
    &.red{
      color: red;
    }
    &.blue{
      color: blue;
    }
    &.green{
      color: green;
    }
    &.purple {
      color: purple;
    }
  }

`;
export default GlobalStyle;
