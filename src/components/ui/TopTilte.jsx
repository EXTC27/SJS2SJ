import styled from "styled-components";
import { Button } from "@mui/material";
import SJandSJ from "../../assets/icons/SJandSJ.svg";
import menuIcon from "../../assets/icons/menu.svg";

const TopTitle = ({ setOpenMenu }) => {
  return (
    <StTopTitleCont id="top-cont">
      <img className="sj-and-sj" src={SJandSJ} alt="" />
      <StIconButton onClick={() => setOpenMenu(true)}>
        <img src={menuIcon} alt="" />
      </StIconButton>
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
  height: 72px;
  padding-left: ${({ theme }) => theme.resWpx(32, theme)};
  padding-right: ${({ theme }) => theme.resWpx(16, theme)};
  .sj-and-sj {
    width: ${({ theme }) => theme.resWpx(234, theme)};
  }
  ${({ theme }) => theme.FadeIn("0.8s")};
`;

const StIconButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 0;
  width: ${({ theme }) => theme.resWpx(84, theme)};
  height: ${({ theme }) => theme.resWpx(84, theme)};
  padding: 0;
  border-radius: 100%;

  img {
    width: ${({ theme }) => theme.resWpx(40, theme)};
  }
  .MuiTouchRipple-root {
    color: ababab;
  }
`;
