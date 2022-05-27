import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainPageStateContext } from "../../context/stateContext";
import TopTitle from "../ui/TopTilte";
import TopMenuList from "../ui/TopMenuList";
import Footer from "../ui/Footer";
import CardList from "../ui/CardList";
import CustomToast from "../ui/CustomToast";

const MainPage = () => {
  const [popToast, setPopToast] = useState("");

  useEffect(() => {
    // // document.getElementById("main-page-cont").style.opacity = 1;
    // const callback = (e) => {
    //   if (blockingCondition) {
    //     e.preventDefault();
    //     e.returnValue = "";
    //   }
    // };
    // window.addEventListener("beforeunload", callback);
    // return () => window.removeEventListener("beforeunload", callback);
  }, []);

  return (
    <MainPageStateContext.Provider
      value={{
        popToast,
        setPopToast,
      }}
    >
      <StMainPageCont id="main-page-cont">
        <TopTitle />
        <TopMenuList />
        <CardList />
        <Footer />
        <CustomToast />
      </StMainPageCont>
    </MainPageStateContext.Provider>
  );
};
export default MainPage;

const StMainPageCont = styled.div`
  background: white;
  width: 100%;
  padding-top: 72px;

  /* transition: all 0.5s ease-out;
  opacity: 0; */
`;
