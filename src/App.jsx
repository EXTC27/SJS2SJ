import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/themeContext";
import { useResize } from "./hooks/customHooks";
import GreetingPage from "./components/pages/GreetingPage";
import MainPage from "./components/pages/MainPage";

const App = () => {
  const { appWidth, appHeight } = useResize();
  const [onGreeting, setOnGreeting] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", handleTopShadow);
    return () => {
      document.removeEventListener("scroll", handleTopShadow);
    };
  }, []);
  const handleTopShadow = (e) => {
    const _scrollLocation = document.documentElement.scrollTop;
    const _topCont = document.getElementById("top-cont");
    if (_scrollLocation > 0) {
      _topCont.style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.2)";
    } else {
      _topCont.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
    }
  };

  return (
    <StAppCont>
      <ThemeProvider theme={{ ...theme, appWidth, appHeight }}>
        {onGreeting ? (
          <GreetingPage setOnGreeting={setOnGreeting} />
        ) : (
          <MainPage />
        )}
      </ThemeProvider>
    </StAppCont>
  );
};

export default App;

const StAppCont = styled.main`
  margin: auto;
  max-width: 750px;
  width: ${({ theme }) => theme.appWidth}px;

  ${({ theme }) => theme.hideScrollBar}
`;
