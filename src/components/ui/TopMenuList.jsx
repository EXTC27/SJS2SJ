import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pre0 from "../../assets/images/gallery/pre0.png";
import pre1 from "../../assets/images/gallery/pre1.png";
import pre2 from "../../assets/images/gallery/pre2.png";
import pre3 from "../../assets/images/gallery/pre3.png";

const TopMenuList = () => {
  return (
    <StTopMenuListCont>
      <TopMenu imgSrc={pre0} imgPos={"center"} idx={0} />
      <TopMenu imgSrc={pre1} imgPos={"center top"} idx={1} />
      <TopMenu imgSrc={pre2} imgPos={"center bottom"} idx={2} />
      <TopMenu imgSrc={pre3} imgPos={"center"} idx={3} />
    </StTopMenuListCont>
  );
};
export default TopMenuList;

const StTopMenuListCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.hideScrollBar}
  padding-top: ${({ theme }) => theme.resWpx(20, theme)};
  padding-bottom: ${({ theme }) => theme.resWpx(30, theme)};
  padding-left: ${({ theme }) => theme.resWpx(32, theme)};
  padding-right: ${({ theme }) => theme.resWpx(32, theme)};
  border-bottom: ${({ theme }) => theme.resWpx(1, theme)} solid #cedbe0;
  ${({ theme }) => theme.MoveUpFadeIn("0.8s", "0.5s")};
`;

const TopMenu = ({ imgSrc, imgPos, idx }) => {
  const _nav = useNavigate();
  return (
    <StTopMenuCont
      imgPos={imgPos}
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
          object-position: ${({ imgPos }) => imgPos};
        }
      }
    }
  }
`;
