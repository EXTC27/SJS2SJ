import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { IconButton, Zoom, Fade } from "@mui/material";
import { MainPageStateContext } from "../../context/stateContext";
import heartSvg from "../../assets/icons/heart.svg";
import heartFillSvg from "../../assets/icons/heart-fill.svg";
import commentSvg from "../../assets/icons/comment.svg";

const Card = ({ profileImg, contents, view, cardContent }) => {
  const [isLike, setIsLike] = useState(false);
  const { setPopToast } = useContext(MainPageStateContext);

  useEffect(() => {
    if (isLike) {
      setPopToast("축하해주셔서 감사합니다!! 😍");
      setTimeout(() => {
        setIsLike(false);
      }, 2000);
    }
  }, [isLike, setPopToast]);

  const clickComment = () => {
    setPopToast("디자인을 위한 버튼이에요 😭");
  };

  return (
    <StCardCont>
      <StCardTopCont>
        <div className="profile-cont-grad">
          <div className="profile-cont">
            <div className="profile-img">
              <img src={profileImg} alt="" />
            </div>
          </div>
        </div>
        <div className="title-cont">
          <div className="title-text font">{contents["title"]}</div>
          <div className="sub-title-text font">{contents["subTitle"]}</div>
        </div>
      </StCardTopCont>
      {view}
      <StBtnSet isLike={isLike}>
        <div
          className="heart-btn"
          onClick={() => {
            setIsLike(true);
          }}
        >
          <Fade in={!isLike} timeout={1000}>
            <img className="no-fill" src={heartSvg} alt={`${heartSvg}`} />
          </Fade>
          <Zoom in={isLike}>
            <img className="fill" src={heartFillSvg} alt={`${heartFillSvg}`} />
          </Zoom>
        </div>
        <StCommentBtn color="default" onClick={clickComment}>
          <img src={commentSvg} alt={`${commentSvg}`} />
        </StCommentBtn>
      </StBtnSet>
      {cardContent}
    </StCardCont>
  );
};
export default Card;

const StCardCont = styled.div`
  width: 100%;
  /* margin-top: ${({ theme }) => theme.resWpx(16, theme)}; */
  margin-top: 16px;
  ${({ theme }) => theme.MoveUpFadeIn("1s", "0.8s", "", "10%")};
`;

const StCardTopCont = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  padding: 0 ${({ theme }) => theme.resWpx(32, theme)};

  .profile-cont-grad {
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ theme }) => theme.resWpx(88, theme)};
    height: ${({ theme }) => theme.resWpx(88, theme)};
    padding: ${({ theme }) => theme.resWpx(5, theme)};
    border-radius: 100%;

    background: linear-gradient(225deg, #de11a5, #fcb26d);

    .profile-cont {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;
      padding: ${({ theme }) => theme.resWpx(3, theme)};
      border-radius: 100%;

      background-color: white;

      .profile-img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
      }
    }
  }
  .title-cont {
    margin-left: ${({ theme }) => theme.resWpx(16, theme)};
    .title-text {
      font-size: ${({ theme }) => theme.resWpx(30, theme)};
      font-weight: bold;
      line-height: calc(42 / 30);
      margin-bottom: ${({ theme }) => theme.resWpx(5, theme)};
    }
    .sub-title-text {
      font-size: ${({ theme }) => theme.resWpx(24, theme)};
      line-height: calc(35 / 24);
    }
  }
`;

const StBtnSet = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${({ theme }) => theme.resHpx(12, theme)} 0;
  padding: 0 ${({ theme }) => theme.resWpx(32, theme)};
  img {
    height: ${({ theme }) => theme.resWpx(48, theme)};
  }
  .heart-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ theme }) => theme.resWpx(72, theme)};
    height: ${({ theme }) => theme.resWpx(72, theme)};
    margin-right: ${({ theme }) => theme.resWpx(20, theme)};
    color: #ff2600;
    .no-fill {
      position: absolute;
      z-index: 1;
    }
    .fill {
      position: absolute;
      z-index: 2;
    }
  }
`;

const StCommentBtn = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.resWpx(84, theme)};
  height: ${({ theme }) => theme.resWpx(84, theme)};
  padding: 0;
  border-radius: 100%;
`;
