import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { KeyboardDoubleArrowUpRounded } from "@mui/icons-material";
import imgFile from "../../assets/images/greeting/greeting.png";

const GreetingPage = ({ setOnGreeting }) => {
  const [enableBtn, setEnableBtn] = useState(false);
  const stopWatch = useRef(Date.now());
  const alarm = {
    setup: function (callback, duration) {
      this.timeoutID = setTimeout(() => {
        callback();
        this.cancel();
      }, duration);
    },
    cancel: function () {
      clearTimeout(this.timeoutID);
    },
  };

  const moveMainPage = () => {
    if (!enableBtn) return;
    alarm.setup(() => setOnGreeting(false), 1500);
    document.getElementById("greeting-page-cont").style.opacity = 0;
  };

  const runAnimation = () => {
    const _now = Date.now();
    const _compare =
      2200 - _now + stopWatch.current > 0 ? 2200 - _now + stopWatch.current : 0;

    alarm.setup(() => setEnableBtn(true), _compare + 2000);

    const _bg_img = document.getElementById("bg-img").style;
    const _btn = document.getElementsByClassName("MuiButton-contained")[0]
      .style;
    const _click = document.getElementsByClassName("click-cont")[0].style;
    _bg_img.transitionDelay = `${_compare}ms`;
    _bg_img.opacity = 1;

    _btn.transitionDelay = `${_compare + 1000}ms`;
    _btn.opacity = 1;
    _click.transitionDelay = `${_compare + 2000}ms`;
    _click.opacity = 1;
  };

  return (
    <StGreetingPageCont id="greeting-page-cont">
      <img id="bg-img" src={imgFile} alt="" onLoad={runAnimation} />
      <div className="text-cont">
        <div className="font mapo text line0">우리 결혼합니다</div>
        <div className="font mapo text line1">2022년 7월 2일 오후 2시</div>
        <div className="font mapo text line2">
          서울 정동 프란치스코 교육회관 성당
        </div>
        <div className="btn-cont">
          <Button
            className="font"
            variant="contained"
            onClick={moveMainPage}
            disableRipple={!enableBtn}
          >
            여러분을 초대합니다
          </Button>
          <div className="click-cont">
            <KeyboardDoubleArrowUpRounded />
            <div className="font click">CLICK</div>
          </div>
        </div>
      </div>
    </StGreetingPageCont>
  );
};
export default GreetingPage;

const StGreetingPageCont = styled.div`
  position: relative;

  width: 100%;
  height: ${({ theme }) => theme.appHeight}px;

  opacity: 1;
  transition: opacity 1s ease-out;

  img {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transition: opacity 1.5s ease-out;
  }
  .text-cont {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    padding-top: ${({ theme }) => theme.resHpx(54, theme)};

    .text {
      font-size: ${({ theme }) => theme.resWpx(36, theme)};
      line-height: calc(43 / 36);
      margin-bottom: ${({ theme }) => theme.resHpx(38, theme)};

      opacity: 0;
      animation: moveUpFadeIn 1s linear forwards;
    }
    .line0 {
      animation-delay: 0s;
    }
    .line1 {
      animation-delay: 0.5s;
    }
    .line2 {
      animation-delay: 1s;
    }
  }

  .btn-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .MuiButton-contained {
      opacity: 0;
      transition: opacity 1s ease-in-out;
      padding: 16px;
      border-radius: 16px;
      margin-bottom: ${({ theme }) => theme.resHpx(16, theme)};

      color: white;
      background-color: black;
      font-size: ${({ theme }) => theme.resWpx(32, theme)};
      font-weight: bold;
      line-height: 1;
      letter-spacing: 0;
    }
    .click-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      opacity: 0;
      transition: opacity 0.8s ease-in-out;
      animation: bounce 0.6s linear infinite;
      .click {
        font-size: ${({ theme }) => theme.resWpx(24, theme)};
        font-weight: bold;
      }
    }
  }

  @keyframes moveUpFadeIn {
    0% {
      opacity: 0;
      transform: translateY(70%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(12px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
