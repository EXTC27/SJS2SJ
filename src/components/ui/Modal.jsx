import React, { useContext } from "react";
import styled from "styled-components";
import { Dialog, Button } from "@mui/material";
import { MainPageStateContext } from "../../context/stateContext";
import CopyToClipboard from "react-copy-to-clipboard";

const Modal = () => {
  const { popModal, setPopModal, setPopToast } =
    useContext(MainPageStateContext);
  const handleClick = (who) => {
    setPopToast(`계좌가 복사되었습니다.\n(예금주: ${who})`);
    setPopModal("");
  };

  return (
    <Dialog open={popModal !== ""} onClose={() => setPopModal("")}>
      {popModal === "groom" ? (
        <StAccountCont>
          <div className="account-cont first">
            <div className="font-cont">
              <div className="font">우리</div>
              <div className="font">{`${process.env.REACT_APP_GROOM0}`}</div>
              <div className="font">
                예금주: <b>김강식</b>
              </div>
            </div>
            <div className="btn-cont">
              <CopyToClipboard
                text={`우리 ${process.env.REACT_APP_GROOM0}`}
                onCopy={() => {
                  handleClick("김강식");
                }}
              >
                <Button className="donation" variant="contained">
                  계좌 복사
                </Button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="line"></div>
          <div className="account-cont last">
            <div className="font-cont">
              <div className="font">KB국민</div>
              <div className="font">{`${process.env.REACT_APP_GROOM1}`}</div>
              <div className="font">
                예금주: <b>김신재</b>
              </div>
            </div>
            <div className="btn-cont">
              <CopyToClipboard
                text={`KB국민 ${process.env.REACT_APP_GROOM1}`}
                onCopy={() => {
                  handleClick("김신재");
                }}
              >
                <Button className="donation" variant="contained">
                  계좌 복사
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </StAccountCont>
      ) : popModal === "bride" ? (
        <StAccountCont>
          <div className="account-cont first">
            <div className="font-cont">
              <div className="font">농협</div>
              <div className="font">{`${process.env.REACT_APP_BRIDE0}`}</div>
              <div className="font">
                예금주: <b>이남숙</b>
              </div>
            </div>
            <div className="btn-cont">
              <CopyToClipboard
                text={`농협 ${process.env.REACT_APP_BRIDE0}`}
                onCopy={() => {
                  handleClick("이남숙");
                }}
              >
                <Button className="donation" variant="contained">
                  계좌 복사
                </Button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="line"></div>
          <div className="account-cont last">
            <div className="font-cont">
              <div className="font">KB국민</div>
              <div className="font">{`${process.env.REACT_APP_BRIDE1}`}</div>
              <div className="font">
                예금주: <b>이세진</b>
              </div>
            </div>
            <div className="btn-cont">
              <CopyToClipboard
                text={`KB국민 ${process.env.REACT_APP_BRIDE1}`}
                onCopy={() => {
                  handleClick("이세진");
                }}
              >
                <Button className="donation" variant="contained">
                  계좌 복사
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
    &.first {
      margin-bottom: ${({ theme }) => theme.resHpx(24, theme)};
    }
    &.last {
      margin-top: ${({ theme }) => theme.resHpx(24, theme)};
    }
  }

  .font-cont {
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
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

  .line {
    width: 100%;
    height: 1px;
    background: #e2e2e2;
  }
`;
