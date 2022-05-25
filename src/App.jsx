import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/themeContext";
import { useResize } from "./hooks/customHooks";
import GreetingPage from "./components/pages/GreetingPage";
import MainPage from "./components/pages/MainPage";

const App = () => {
  const { appWidth, appHeight } = useResize();
  const _nav = useNavigate();
  useEffect(() => {
    window.setTimeout(() => {
      _nav("/main", { replace: true });
    }, 1000);
  }, []);

  return (
    <StAppCont>
      <ThemeProvider theme={{ ...theme, appWidth, appHeight }}>
        <Routes>
          <Route path="/" element={<GreetingPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </ThemeProvider>
    </StAppCont>
  );
};

export default App;

const StAppCont = styled.main``;
