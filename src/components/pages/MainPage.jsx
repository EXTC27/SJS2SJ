import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopTitle from "../ui/TopTilte";
import TopMenuList from "../ui/TopMenuList";

const MainPage = () => {
  useEffect(() => {
    // document.getElementById("main-page-cont").style.opacity = 1;
  }, []);

  return (
    <StMainPageCont id="main-page-cont">
      <TopTitle />
      <TopMenuList />
    </StMainPageCont>
  );
};
export default MainPage;

const StMainPageCont = styled.div`
  width: 100%;

  /* transition: all 0.5s ease-out;
  opacity: 0; */
`;
