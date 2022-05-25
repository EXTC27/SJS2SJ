import styled from "styled-components";

const TopTitle = () => {
  return (
    <StTopTitleCont
      onClick={() => {
        window.open(
          "http://www.fec.or.kr/bbs/board.php?bo_table=pds&wr_id=2",
          "_blank"
        );
      }}
    >
      <img
        src={`${process.env.REACT_APP_PATH}/assets/icons/SJandSJ.svg`}
        alt=""
        loading="lazy"
      />
    </StTopTitleCont>
  );
};
export default TopTitle;

const StTopTitleCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  img {
    width: ${({ theme }) => theme.resWpx(234, theme)};
    margin-left: ${({ theme }) => theme.resWpx(32, theme)};
  }
  ${({ theme }) => theme.MoveUpFadeIn("0.8s")};
`;
