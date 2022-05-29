import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pre0 from "../../assets/images/gallery/pre0.png";
import pre1 from "../../assets/images/gallery/pre1.png";
import pre2 from "../../assets/images/gallery/pre2.png";
import pre3 from "../../assets/images/gallery/pre3.png";
import pre4 from "../../assets/images/gallery/pre4.png";
import { MainPageStateContext } from "../../context/stateContext";

const TopMenuList = () => {
  return (
    <StTopMenuListCont>
      <TopMenu cName="first" imgSrc={pre0} idx={0} />
      <TopMenu imgSrc={pre1} idx={1} />
      <TopMenu imgSrc={pre2} idx={2} />
      <TopMenu imgSrc={pre3} idx={3} />
      <TopMenu cName="last" imgSrc={pre4} idx={4} />
    </StTopMenuListCont>
  );
};
export default TopMenuList;

const StTopMenuListCont = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  overflow-x: auto;
  ${({ theme }) => theme.hideScrollBar}
  padding-top: ${({ theme }) => theme.resWpx(20, theme)};
  padding-bottom: ${({ theme }) => theme.resWpx(30, theme)};
  border-bottom: ${({ theme }) => theme.resWpx(1, theme)} solid #cedbe0;
  ${({ theme }) => theme.MoveUpFadeIn("0.8s", "0.5s")};
`;

const TopMenu = ({ cName, imgSrc, idx }) => {
  const _nav = useNavigate();
  return (
    <StTopMenuCont
      cName={cName}
      onClick={() => {
        _nav(`/gallery/${idx}`);
      }}
    >
      <div className="avatar-cont-grad">
        <div className="avatar-cont">
          <div className="avatar-img">
            <img src={imgSrc} alt="" />
          </div>
        </div>
      </div>
    </StTopMenuCont>
  );
};

const StTopMenuCont = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: ${({ theme, cName }) =>
    cName === "first" ? theme.resWpx(32, theme) : theme.resWpx(38, theme)};
  margin-right: ${({ theme, cName }) =>
    cName === "last" ? theme.resWpx(32, theme) : "0px"};

  .avatar-cont-grad {
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ theme }) => theme.resWpx(144, theme)};
    height: ${({ theme }) => theme.resWpx(144, theme)};
    padding: ${({ theme }) => theme.resWpx(6, theme)};
    border-radius: 100%;

    background: linear-gradient(225deg, #de11a5, #fcb26d);

    .avatar-cont {
      background: white;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;
      padding: ${({ theme }) => theme.resWpx(4, theme)};
      border-radius: 100%;

      .avatar-img {
        background: #f6f6f6;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
`;
