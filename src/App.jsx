import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/themeContext";
import { useResize } from "./hooks/customHooks";
import GreetingPage from "./components/pages/GreetingPage";
import MainPage from "./components/pages/MainPage";

const App = () => {
  const { appWidth, appHeight } = useResize();
  const [onGreeting, setOnGreeting] = useState(true);

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
