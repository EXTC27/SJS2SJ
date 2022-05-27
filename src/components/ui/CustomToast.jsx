import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { MainPageStateContext } from "../../context/stateContext";

const CustomToast = () => {
  const { popToast, setPopToast } = useContext(MainPageStateContext);

  useEffect(() => {
    if (popToast !== "") {
      const _dom = document.getElementById("custom-toast");
      _dom.style.display = "flex";
      setTimeout(() => {
        _dom.style.opacity = "1";
      }, 100);
      setTimeout(() => {
        _dom.style.opacity = "0";
      }, 2000);
      setTimeout(() => {
        _dom.style.display = "none";
        setPopToast("");
      }, 3000);
    }
  }, [popToast, setPopToast]);

  return (
    <StToastCont
      id="custom-toast"
      className="font"
      style={{ opacity: "0", display: "flex" }}
    >
      {popToast}
    </StToastCont>
  );
};
export default CustomToast;

const StToastCont = styled.div`
  transition: all 0.3s ease-in;

  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: pre;
  line-height: 1.5;
  text-align: center;

  background: rgba(0, 0, 0, 0.8);
  color: white;
  position: fixed;
  left: 50%;
  bottom: ${({ theme }) => theme.resHpx(100, theme)};
  transform: translateX(-50%);

  padding: ${({ theme }) => theme.resWpx(24, theme)};
  border-radius: ${({ theme }) => theme.resWpx(16, theme)};
`;
