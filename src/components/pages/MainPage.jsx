import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainPageStateContext } from "../../context/stateContext";
import TopTitle from "../ui/TopTilte";
import TopMenuList from "../ui/TopMenuList";
import Footer from "../ui/Footer";
import CardList from "../ui/CardList";
import CustomToast from "../ui/CustomToast";
import Modal from "../ui/Modal";

const MainPage = () => {
  const [popToast, setPopToast] = useState("");
  const [popModal, setPopModal] = useState("");
  // const [modalTxt, setModalTxt] = useState("");

  return (
    <MainPageStateContext.Provider
      value={{
        popToast,
        setPopToast,
        popModal,
        setPopModal,
        // modalTxt,
        // setModalTxt,
      }}
    >
      <StMainPageCont id="main-page-cont">
        <TopTitle />
        <TopMenuList />
        <CardList />
        <Footer />
        <CustomToast />
      </StMainPageCont>
      <Modal />
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
