import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import createScrollSnap from "scroll-snap";
import { Fade, IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";
import cardImg0 from "../../assets/images/card/image0.png";
import cardImg1 from "../../assets/images/card/image1.png";
import cardImg2 from "../../assets/images/card/image2.png";
import cardImg3 from "../../assets/images/card/image3.png";

const GalleryPage = () => {
  const _nav = useNavigate();
  const _param = useParams();
  const { appWidth } = useContext(ThemeContext);
  const tabWidth = useRef(0);
  const [idx, setIdx] = useState(Number(_param.idx));
  const [imgList] = useState([cardImg0, cardImg1, cardImg2, cardImg3]);

  useEffect(() => {
    const _scrollDiv = document.getElementsByClassName("scroll-div")[0];
    tabWidth.current =
      (appWidth - 2 * 8 - (imgList.length - 1) * 4) / imgList.length + 4;
    _scrollDiv.style.width = `${tabWidth.current}px`;
    _scrollDiv.style.left = `${tabWidth.current * idx}px`;

    const _dom = document.getElementsByClassName("img-cont")[0];
    _dom.scrollTo(appWidth * idx, 0);
    createScrollSnap(_dom, {
      snapDestinationX: "100%",
      timeout: 100,
      duration: 200,
      threshold: 0.25,
    });
    _dom.addEventListener("scroll", handleScroll);
    return () => _dom.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const _scrollDiv = document.getElementsByClassName("scroll-div")[0];
    const _scrollL = e.target.scrollLeft;
    const _scrollW = e.target.scrollWidth;
    _scrollDiv.style.left = `${((appWidth - 12) / _scrollW) * _scrollL}px`;

    if (_scrollL % appWidth === 0) {
      setIdx(_scrollL / appWidth);
    }
  };

  const back = () => {
    _nav(-1);
  };

  return (
    <Fade in={true}>
      <StGalleryPageCont id="gallery-page">
        <div className="top-cont">
          <StBackBtn onClick={back}>
            <Clear />
          </StBackBtn>
        </div>
        <StAnimateBar>
          <div className="back-opa">
            <div className="scroll-div"></div>
            <div className="transfer-cont">
              {imgList.map((el, idx) => {
                if (idx === 0)
                  return <div key={idx} className="transfer-div end"></div>;
                return <div key={idx} className="transfer-div"></div>;
              })}
              <div key={idx} className="transfer-div end"></div>
            </div>
          </div>
        </StAnimateBar>
        <div className="img-cont">
          {imgList.map((el, idx) => (
            <img key={idx} src={el} alt={el} />
          ))}
        </div>
      </StGalleryPageCont>
    </Fade>
  );
};
export default GalleryPage;
const StGalleryPageCont = styled.div`
  background: black;
  width: 100%;
  height: ${({ theme }) => theme.appHeight}px;

  .top-cont {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: ${({ theme }) => theme.resWpx(32, theme)};

    width: 100%;
    height: 72px;
  }
  .img-cont {
    ${({ theme }) => theme.hideScrollBar}
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: calc(100% - 72px);
    padding-bottom: ${({ theme }) => theme.resHpx(72, theme)};
    overflow-x: auto;
    img {
      width: 100%;
    }
  }
`;

const StAnimateBar = styled.div`
  width: 100%;
  height: 4px;
  padding: 0 6px;

  .back-opa {
    position: relative;

    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;

    .scroll-div {
      position: absolute;
      left: 0;
      top: 0;
      transition: all 0.1s linear;
      background: white;
      border-radius: 2px;
      height: 100%;
    }
    .transfer-cont {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 4px;

      .transfer-div {
        height: 4px;
        width: 4px;
        background: black;
        &.end {
          width: 2px;
        }
      }
    }
  }
`;

const StBackBtn = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.resWpx(84, theme)};
  height: ${({ theme }) => theme.resWpx(84, theme)};
  padding: 0;
  border-radius: 100%;

  color: white;
`;
