import styled from "styled-components";

const Footer = () => {
  return (
    <StFooterCont>
      <div className="font text">
        {`이 모바일 청첩장은\n👰🏻‍♀️ 신부가 디자인하고 👩🏻‍🎨\n🤵🏻 신랑이 개발하였습니다 🧑🏻‍💻`}
      </div>
      <div className="emoji">😆</div>
    </StFooterCont>
  );
};
export default Footer;

const StFooterCont = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 240px;

  .text {
    white-space: pre;
    margin-bottom: 16px;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.resWpx(36, theme)};
    font-weight: bold;
    text-align: center;
  }
  .emoji {
    font-size: 36px;
  }
`;
