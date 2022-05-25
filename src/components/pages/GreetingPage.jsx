import styled from "styled-components";
import { Button } from "@mui/material";
import { KeyboardDoubleArrowUpRounded } from "@mui/icons-material";

const GreetingPage = ({ setOnGreeting }) => {
  const moveMainPage = () => {
    window.setTimeout(() => {
      setOnGreeting(false);
    }, 1500);
    document.getElementById("greeting-cont").style.opacity = 0;
  };
  return (
    <StGreetingPageCont id="greeting-cont">
      <div className="img-cont" />
      <div className="text-cont">
        <div className="font mapo text line0">저희 결혼합니다</div>
        <div className="font mapo text line1">2022년 7월 2일 오후 2시</div>
        <div className="font mapo text line2">
          서울 정동 프란치스코 교육회관 성당
        </div>
        <div className="btn-cont">
          <Button className="font" variant="contained" onClick={moveMainPage}>
            여러분을 초대합니다
          </Button>
          <div className="click-cont">
            <KeyboardDoubleArrowUpRounded />
            <div className="font click">Click</div>
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

  transition: all 1s ease-out;
  opacity: 1;

  .img-cont {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${({ theme }) =>
      theme.backImg(`${process.env.REACT_APP_PATH}/assets/images/image0.png`)};
    animation: fadeIn 1.5s ease-in 1.2s forwards;
    opacity: 0;
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
      animation: upAndFadeIn 1s linear forwards;
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
      animation: fadeIn 1s ease-in-out 2s forwards;
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
      animation: fadeIn 0.8s ease-in-out 3s forwards,
        bounce 0.6s linear infinite;
      .click {
        font-size: ${({ theme }) => theme.resWpx(24, theme)};
        font-weight: bold;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes upAndFadeIn {
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
