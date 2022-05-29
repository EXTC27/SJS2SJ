import React, { useState, useRef, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
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
  const [idx, setIdx] = useState(Number(_param.idx));
  const [imgList, setImgList] = useState([
    cardImg0,
    cardImg1,
    cardImg2,
    cardImg3,
  ]);
  useEffect(() => {
    const _dom = document.getElementsByClassName("img-cont")[0];
    createScrollSnap(_dom, {
      snapDestinationX: "100%",
      timeout: 100,
      duration: 300,
      threshold: 0.6,
    });
  }, []);
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
        <div className="img-cont">
          {imgList.map((el, idx) => (
            <img src={el} alt="" />
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
    /* scroll-snap-type: x proximity; */

    img {
      width: 100%;
      /* scroll-snap-align: center; */
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
