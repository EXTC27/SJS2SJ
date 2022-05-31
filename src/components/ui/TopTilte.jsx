import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { IconButton, Zoom } from "@mui/material";
import SJandSJ from "../../assets/icons/SJandSJ.svg";
import sinjae from "../../assets/icons/sinjae.jpeg";
import sejin from "../../assets/icons/sejin.jpeg";
import love from "../../assets/icons/love.jpeg";

const TopTitle = () => {
  const [tic, setTic] = useState(0);
  const ticRef = useRef();
  useEffect(() => {
    ticRef.current = setTimeout(() => {
      setTic((tic + 1) % 4);
    }, 1000);
    return () => clearTimeout(ticRef.current);
  }, []);
  useEffect(() => {
    ticRef.current = setTimeout(() => {
      setTic((tic + 1) % 4);
    }, 1000);
    return () => clearTimeout(ticRef.current);
  }, [tic]);

  return (
    <StTopTitleCont id="top-cont">
      <img className="sj-and-sj" src={SJandSJ} alt="" />
      <div className="animation-div"></div>
      <StAnimeDiv>
        <Zoom in={tic === 0}>
          <img src={sinjae} alt={sinjae} />
        </Zoom>
        <Zoom in={tic === 1}>
          <img className="heart" src={love} alt={love} />
        </Zoom>
        <Zoom in={tic === 2}>
          <img src={sejin} alt={sejin} />
        </Zoom>
        <Zoom in={tic === 3}>
          <img className="heart" src={love} alt={love} />
        </Zoom>
      </StAnimeDiv>
    </StTopTitleCont>
  );
};
export default TopTitle;

const StTopTitleCont = styled.div`
  transition: box-shadow 0.1s ease-in;
  background: white;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.resHpx(128, theme)};
  padding: ${({ theme }) => theme.resWpx(32, theme)};
  .sj-and-sj {
    width: ${({ theme }) => theme.resWpx(234, theme)};
  }
  ${({ theme }) => theme.FadeIn("0.8s")};
`;

const StAnimeDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.resWpx(90, theme)};
  max-width: 58px;
  height: ${({ theme }) => theme.resWpx(90, theme)};
  max-height: 58px;

  padding: 0;
  border-radius: 100%;

  img {
    position: absolute;
    width: 110%;
    height: 110%;
    &.heart {
      width: 60%;
      height: 60%;
    }
  }
`;
