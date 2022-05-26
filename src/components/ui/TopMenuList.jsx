import styled from "styled-components";
import avatar1 from "../../assets/images/avatar/avatar1.png";
import avatar2 from "../../assets/images/avatar/avatar2.png";
import avatar3 from "../../assets/images/avatar/avatar3.png";

const TopMenuList = () => {
  return (
    <StTopMenuListCont>
      <TopMenu cName="first" imgSrc={avatar1} label={"제목0"} />
      <TopMenu imgSrc={avatar1} label={"제목1"} />
      <TopMenu imgSrc={avatar2} label={"제목2"} />
      <TopMenu imgSrc={avatar3} label={"제목3"} />
      <TopMenu cName="last" imgSrc={avatar1} label={"제목4"} />
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

const TopMenu = ({ cName, imgSrc, label }) => {
  return (
    <StTopMenuCont cName={cName}>
      <div className="avatar-cont-grad">
        <div className="avatar-cont">
          <div className="avatar-img">
            <img src={imgSrc} alt="" />
          </div>
        </div>
      </div>
      <div className="font label">{label}</div>
    </StTopMenuCont>
  );
};

const StTopMenuCont = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

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
    margin-bottom: ${({ theme }) => theme.resWpx(8, theme)};

    background: linear-gradient(225deg, #de11a5, #fcb26d);

    .avatar-cont {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;
      padding: ${({ theme }) => theme.resWpx(4, theme)};
      border-radius: 100%;

      background-color: white;

      .avatar-img {
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
