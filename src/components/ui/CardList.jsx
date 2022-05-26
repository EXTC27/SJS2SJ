import styled from "styled-components";
import Card from "./Card";
import * as CC from "./CardContents";
import contents from "../../assets/contents.json";
import profileImg0 from "../../assets/images/profile/profile0.png";
import profileImg1 from "../../assets/images/profile/profile1.png";
import profileImg2 from "../../assets/images/profile/profile2.png";
import profileImg3 from "../../assets/images/profile/profile3.png";
import cardImg0 from "../../assets/images/card/image0.png";
import cardImg1 from "../../assets/images/card/image1.png";
import cardImg2 from "../../assets/images/card/image2.png";

const CardList = () => {
  return (
    <>
      <Card
        profileImg={profileImg0}
        contents={contents["cardData"][0]}
        view={<CardPhoto imgPos="bottom center" cardImg={cardImg0} />}
        cardContent={<CC.CardContents0 />}
      />
      <Card
        profileImg={profileImg1}
        contents={contents["cardData"][1]}
        view={<CardPhoto imgPos="center" cardImg={cardImg1} />}
        cardContent={<CC.CardContents1 />}
      />
      <Card
        profileImg={profileImg2}
        contents={contents["cardData"][2]}
        view={<CardPhoto imgPos="center" cardImg={cardImg2} />}
        cardContent={<CC.CardContents2 />}
      />
      <Card
        profileImg={profileImg3}
        contents={contents["cardData"][3]}
        view={<CardPhoto imgPos="center" cardImg={cardImg2} />}
        cardContent={<CC.CardContents3 />}
      />
    </>
  );
};
export default CardList;

const CardPhoto = ({ imgPos, cardImg }) => {
  return (
    <StImgCont imgPos={imgPos}>
      <img src={cardImg} alt={`${cardImg}`} />
    </StImgCont>
  );
};
const StImgCont = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.resWpx(864, theme)};
  margin: ${({ theme }) => theme.resHpx(24, theme)} 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ imgPos }) => imgPos};
  }
`;
