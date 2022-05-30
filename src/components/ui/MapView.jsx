/* global naver */
import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import {
  FavoriteBorder,
  DirectionsCarFilledOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import marry from "../../assets/icons/marry.svg";
import parking from "../../assets/icons/parking.svg";

const _mCoord = {
  lat: 37.5675752,
  lng: 126.9700889,
};
const _pCoord = {
  lat: 37.5671667,
  lng: 126.970646,
};

const MapView = () => {
  const mapRef = useRef();
  useEffect(() => {
    const _mapDOM = document.getElementById("map-cont");
    const _map = new naver.maps.Map(_mapDOM, {
      center: new naver.maps.LatLng(_mCoord.lat, _mCoord.lng),
      keyboardShortcuts: false,
      zoom: 16,
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(_mCoord.lat, _mCoord.lng),
      map: _map,
      icon: {
        url: marry,
        size: new naver.maps.Size(50, 50),
        scaledSize: new naver.maps.Size(50, 50),
      },
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(_pCoord.lat, _pCoord.lng),
      map: _map,
      icon: {
        url: parking,
        size: new naver.maps.Size(40, 40),
        scaledSize: new naver.maps.Size(40, 40),
      },
    });
    mapRef.current = _map;
  }, []);

  const moveMap = (where) => {
    if (where === "marry") {
      mapRef.current.morph(new naver.maps.LatLng(_mCoord.lat, _mCoord.lng), 18);
    } else {
      mapRef.current.morph(new naver.maps.LatLng(_pCoord.lat, _pCoord.lng), 18);
    }
  };

  return (
    <StMapCont id="map-cont">
      <div className="move-btn-cont">
        <Button className="marry" onClick={() => moveMap("marry")}>
          <FavoriteBorder />
        </Button>
        <Button className="parking" onClick={() => moveMap("parking")}>
          <DirectionsCarFilledOutlined />
        </Button>
      </div>
    </StMapCont>
  );
};
export default MapView;
const StMapCont = styled.div`
  position: relative;

  width: 100%;
  height: ${({ theme }) => theme.resWpx(864, theme)};
  margin: ${({ theme }) => theme.resHpx(24, theme)} 0;

  .move-btn-cont {
    position: absolute;
    z-index: 100;
    right: 16px;
    bottom: 32px;

    display: flex;
    flex-direction: column;

    .MuiButton-root {
      min-width: 0px;
      padding: 4px;

      color: white;
      &.marry {
        background: rgb(255, 112, 112);
        margin-bottom: 8px;
      }
      &.parking {
        background: gray;
      }
      font-size: ${({ theme }) => theme.resWpx(24, theme)};
      line-height: 1;
      letter-spacing: 0;
    }
  }
`;
