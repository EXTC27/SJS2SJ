import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Dialog, Button } from "@mui/material";
import { MainPageStateContext } from "../../context/stateContext";
import CopyToClipboard from "react-copy-to-clipboard";

const Modal = () => {
  const { modalTxt, popModal, setPopModal, setPopToast } =
    useContext(MainPageStateContext);
  const handleClick = (who) => {
    setPopToast(`계좌가 복사되었습니다.\n(예금주: ${who})`);
    setPopModal("");
  };

  return (
    <Dialog open={popModal !== ""} onClose={() => setPopModal("")}>
      {popModal === "groom" ? (
        <StAccountCont>
          <div className="account-cont">
            <div className="font">
              예금주: <b>김신재</b>
            </div>
            <div className="btn-cont">
              <CopyToClipboard
                text={`${process.env.REACT_APP_GROOM}`}
                onCopy={() => {
                  handleClick("김신재");
                }}
              >
                <Button className="donation" variant="contained">
                  계좌 복사하기
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </StAccountCont>
      ) : popModal === "bride" ? (
        <StAccountCont>
          <div className="account-cont">
            <div className="font">
              예금주: <b>이남숙</b>
            </div>
            <div className="btn-cont">
              <CopyToClipboard
                text={`${process.env.REACT_APP_BRIDE0}`}
                onCopy={() => {
                  handleClick("이남숙");
                }}
              >
                <Button className="donation" variant="contained">
                  계좌 복사하기
                </Button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="account-cont last">
            <div className="font">
              예금주: <b>이세진</b>
            </div>
            <div className="btn-cont">
              <CopyToClipboard
                text={`${process.env.REACT_APP_BRIDE1}`}
                onCopy={() => {
                  handleClick("이세진");
                }}
              >
                <Button className="donation" variant="contained">
                  계좌 복사하기
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </StAccountCont>
      ) : (
        <div></div>
      )}
    </Dialog>
  );
};
export default Modal;

const StAccountCont = styled.div`
  background: white;
  padding: ${({ theme }) => theme.resWpx(64, theme)};

  .account-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.last {
      margin-top: ${({ theme }) => theme.resHpx(48, theme)};
    }
  }

  .btn-cont {
    display: flex;
    align-items: start;
    justify-content: start;
    margin-left: ${({ theme }) => theme.resWpx(36, theme)};

    .donation {
      background: black;
    }
  }
`;
