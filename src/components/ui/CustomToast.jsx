import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { MainPageStateContext } from "../../context/stateContext";

const CustomToast = () => {
  const { popToast, setPopToast } = useContext(MainPageStateContext);
  const onToastRef = useRef(false);
  const st0 = useRef(null);
  const st1 = useRef(null);
  const st2 = useRef(null);

  useEffect(() => {
    if (popToast !== "") {
      const _dom = document.getElementById("custom-toast");
      if (onToastRef.current) {
        clearTimeout(st1.current);
        clearTimeout(st2.current);
      }
      _dom.style.display = "flex";
      st0.current = setTimeout(() => {
        _dom.style.opacity = "1";
        onToastRef.current = true;
      }, 100);
      st1.current = setTimeout(() => {
        _dom.style.opacity = "0";
      }, 2000);
      st2.current = setTimeout(() => {
        _dom.style.display = "none";
        onToastRef.current = false;
        setPopToast("");
      }, 3000);
    }
    return () => {
      clearTimeout(st0.current);
      clearTimeout(st1.current);
      clearTimeout(st2.current);
    };
  }, [popToast]);

  return (
    <StToastCont
      id="custom-toast"
      className="font"
      style={{ opacity: "0", display: "flex" }}
      popToast={popToast}
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

  background: ${({ popToast }) =>
    popToast.includes("축하해주셔서")
      ? "rgba(255, 172, 172, 0.95)"
      : "rgba(0, 0, 0, 0.85)"};
  color: white;
  position: fixed;
  left: 50%;
  bottom: ${({ theme }) => theme.resHpx(100, theme)};
  transform: translateX(-50%);

  padding: ${({ theme }) => theme.resWpx(24, theme)};
  border-radius: ${({ theme }) => theme.resWpx(16, theme)};
`;
