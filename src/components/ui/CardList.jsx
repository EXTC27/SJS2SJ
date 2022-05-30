import styled from "styled-components";
import Card from "./Card";
import MapView from "./MapView";
import * as CC from "./CardContents";
import contents from "../../assets/contents.json";
import profileImg0 from "../../assets/images/profile/profile0.png";
import profileImg1 from "../../assets/images/profile/profile1.png";
import profileImg2 from "../../assets/images/profile/profile2.png";
import profileImg3 from "../../assets/images/profile/profile3.png";
import profileImg4 from "../../assets/images/profile/profile4.png";
import profileImg5 from "../../assets/images/profile/profile5.png";
import cardImg0 from "../../assets/images/card/image0.png";
import cardImg1 from "../../assets/images/card/image1.png";
import cardImg2 from "../../assets/images/card/image2.png";
import cardImg3 from "../../assets/images/card/image3.png";
import cardImg4 from "../../assets/images/card/image4.png";

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
        view={<CardPhoto imgPos="center bottom" cardImg={cardImg3} />}
        cardContent={<CC.CardContents3 />}
      />
      <Card
        profileImg={profileImg4}
        contents={contents["cardData"][4]}
        view={<CardPhoto imgPos="center" cardImg={cardImg4} />}
        cardContent={<CC.CardContents4 />}
      />
      <Card
        profileImg={profileImg5}
        contents={contents["cardData"][5]}
        view={<MapView />}
        cardContent={<CC.CardContents5 />}
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
  background: #f6f6f6;
  width: 100%;
  height: ${({ theme }) => theme.resWpx(864, theme)};
  margin-top: ${({ theme }) => theme.resHpx(24, theme)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ imgPos }) => imgPos};
  }
`;
