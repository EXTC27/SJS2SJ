/* global naver */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const _mCoord = {
  lat: 37.5675752,
  lng: 126.9700889,
};
const _pCoord = {
  lat: 37.5671667,
  lng: 126.970646,
};

const MapView = () => {
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
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(_pCoord.lat, _pCoord.lng),
      map: _map,
    });
  }, []);

  return <StMapCont id="map-cont"></StMapCont>;
};
export default MapView;
const StMapCont = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.resWpx(864, theme)};
  margin: ${({ theme }) => theme.resHpx(24, theme)} 0;
`;
