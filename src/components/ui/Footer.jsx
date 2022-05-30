/* global Kakao */
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { AssignmentOutlined } from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MainPageStateContext } from "../../context/stateContext";
import kakaoPng from "../../assets/icons/kakao.png";

const Footer = () => {
  const { setPopToast } = useContext(MainPageStateContext);
  useEffect(() => {
    if (Kakao) {
      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.REACT_APP_KAKAO_SHARE);
      }
    }
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendScrap({
      requestUrl: "https://extc27.github.io",
      templateId: 77363,
    });
  };

  const goToTop = () => {
    console.log(document.documentElement.scrollTop);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <StFooterCont>
        <div className="font text">
          {`이 모바일 청첩장은\n👰🏻‍♀️ 신부가 디자인하고 👩🏻‍🎨\n🤵🏻 신랑이 개발하였습니다 🧑🏻‍💻`}
        </div>
        <div className="emoji">😆</div>
        <StShareCont>
          <div>- 공유하기 -</div>
          <div className="btn-cont">
            <CopyToClipboard
              text={"https://extc27.github.io/SJS2SJ/"}
              onCopy={() => {
                setPopToast(`청첩장 링크가 복사되었습니다`);
              }}
            >
              <Button className="normal">
                <AssignmentOutlined />
              </Button>
            </CopyToClipboard>
            <Button className="kakao" onClick={shareKakao}>
              <img src={kakaoPng} alt={kakaoPng} />
            </Button>
          </div>
        </StShareCont>
      </StFooterCont>
      <StGoToTop>
        <Button variant="text" onClick={goToTop}>
          맨 위로 가기
        </Button>
      </StGoToTop>
    </>
  );
};
export default Footer;

const StFooterCont = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  padding: 32px ${({ theme }) => theme.resWpx(32, theme)};

  .text {
    white-space: pre;
    margin-bottom: 16px;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.resWpx(30, theme)};
    font-weight: bold;
    text-align: center;
  }
  .emoji {
    font-size: 32px;
    margin-bottom: ${({ theme }) => theme.resWpx(36, theme)};
  }
`;

const StShareCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;

  .btn-cont {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: ${({ theme }) => theme.resHpx(32, theme)};
    .normal {
      margin-right: ${({ theme }) => theme.resWpx(36, theme)};
      padding: 0px;
      background: black;
      color: white;
      font-size: 16px;
      min-width: 0px;
      width: ${({ theme }) => theme.resWpx(96, theme)};
      height: ${({ theme }) => theme.resWpx(96, theme)};
    }
    .kakao {
      padding: 0px;
      background: #ffde02;
      color: white;
      font-size: 16px;
      min-width: 0px;
      width: ${({ theme }) => theme.resWpx(96, theme)};
      height: ${({ theme }) => theme.resWpx(96, theme)};
    }
  }
`;

const StGoToTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 72px;

  font-family: "Noto Sans KR", sans-serif;

  .MuiButton-root {
    width: 100%;
    height: 100%;
    border-radius: 0;

    color: #666666;
    font-size: 16px;
    font-weight: bold;
  }
`;
