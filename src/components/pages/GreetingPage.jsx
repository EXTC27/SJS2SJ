import styled from "styled-components";

const GreetingPage = ({ setOnGreeting }) => {
  return (
    <StGreetingPageCont>
      <div className="text line0"></div>
    </StGreetingPageCont>
  );
};
export default GreetingPage;

const StGreetingPageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.appHeight}px;
  ${({ theme }) => theme.backImg("SJS2SJ/assets/images/image0.png")};
`;
