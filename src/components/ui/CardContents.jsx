import React, { useContext } from 'react';
import styled from "styled-components";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { MainPageStateContext } from '../../context/stateContext';
import contentJSON from '../../assets/contents.json';
import miniProfile0 from "../../assets/images/profile/mini-profile0.png";
import miniProfile1 from '../../assets/images/profile/mini-profile1.png'

export const CardContents0 = () => {
  return (
    <StCC0>
      <div className="font line0">
        <b>지금 청첩장을 보고있는 님</b> 외 <b>여러 명</b>이 좋아합니다.
      </div>
      <div className="font line1">
        <b>우리 결혼합니다_</b>
      </div>
      <div className="font line2">
        {
          "2022년 7월 2일 토요일 오후 2시\n서울 정동 프란치스코 교육회관 성당\n\n성실하고 똑부러지는 신재와\n센스있고 사랑스러운 세진이가 만나서\n같은 곳을 바라보며 함께 걸어가려합니다.\n많은 축하 부탁드립니다. ☺️👏👏"
        }
      </div>
    </StCC0>
  );
};
const StCC0 = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.resWpx(32, theme)};
  margin-bottom: ${({ theme }) => theme.resHpx(116, theme)};

  .line0 {
    font-size: ${({ theme }) => theme.resWpx(30, theme)};
    line-height: calc(43 / 30);
    margin-bottom: ${({ theme }) => theme.resHpx(10, theme)};
  }
  .line1 {
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    margin-bottom: ${({ theme }) => theme.resHpx(10, theme)};
  }
  .line2 {
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    word-break: keep-all;
    white-space: pre-wrap;
  }
`;

export const CardContents1 = () => {
  return (
    <StCC1>
      <div className="font line0">
        <img src={miniProfile0} alt={`${miniProfile0}`} /> <b>신부 세진</b>&nbsp;외&nbsp;<b>여러 명</b>이 좋아합니다.
      </div>
      <div className="font line1">
        <b>우리 신재는_</b>
      </div>
      <div className="font line2">{}</div>
    </StCC1>
  );
};
const StCC1 = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.resWpx(32, theme)};
  margin-bottom: ${({ theme }) => theme.resHpx(116, theme)};

  .line0 {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.resWpx(30, theme)};
    line-height: calc(43 / 30);
    margin-bottom: ${({ theme }) => theme.resHpx(10, theme)};
    img {
      width: ${({ theme }) => theme.resWpx(48, theme)};
      margin-right: ${({ theme }) => theme.resWpx(12, theme)};
    }
  }
  .line1 {
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    margin-bottom: ${({ theme }) => theme.resHpx(10, theme)};
  }
  .line2 {
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    word-break: keep-all;
    white-space: pre-wrap;
  }
`;
export const CardContents2 = () => {
  return (
    <StCC2>
      <div className="font line0">
        <img src={miniProfile1} alt={`${miniProfile1}`} /> <b>신랑 신재</b>&nbsp;외&nbsp;<b>여러 명</b>이 좋아합니다.
      </div>
      <div className="font line1">
        <b>우리 세진이는_</b>
      </div>
      <div className="font line2">
        { contentJSON['cardData'][2]['tag'].map((el, idx) => <div key={idx}>{el}</div>) }
      </div>
    </StCC2>
  );
};
const StCC2 = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.resWpx(32, theme)};
  margin-bottom: ${({ theme }) => theme.resHpx(116, theme)};

  .line0 {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.resWpx(30, theme)};
    line-height: calc(43 / 30);
    margin-bottom: ${({ theme }) => theme.resHpx(10, theme)};
    img {
      width: ${({ theme }) => theme.resWpx(48, theme)};
      margin-right: ${({ theme }) => theme.resWpx(12, theme)};
    }
  }
  .line1 {
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    margin-bottom: ${({ theme }) => theme.resHpx(10, theme)};
  }
  .line2 {
    display: flex;
    flex-wrap: wrap;
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    white-space: pre-wrap;

    div {
      flex-shrink:0 ;
      color: #3279bb;
    }
  }
`;
export const CardContents3 = () => {
  const { setPopToast } = useContext(MainPageStateContext);
  return (
    <StCC3>
      <div className="font line0">
        <b>안내 사항_</b>
      </div>
      <div className="font line1">
         <b>• 화환</b>
        <div>성당 내에 <b className="red">화환을 반입할 수 없습니다.</b><br/>
          화환을 대신하여 어려운 이웃을 위해<br/>
          사랑의 쌀 혹은 성금 기부 부탁드립니다. 🤗<br/>
          
          <CopyToClipboard text={'하나 158-890033-91004'} onCopy={(text) => {
            setPopToast(text);
          }}>
            <div className="donation">#하나은행, 재)프란치스꼬회, 158-890033-91004</div>
          </CopyToClipboard>
          <div className="donation" onClick={() => {
            window.open("http://www.fec.or.kr/bbs/board.php?bo_table=pds&wr_id=2", '_blank');
          }}>#사랑의 쌀 기부하러가기</div>
        </div>
      </div>
      <div className="font line2">
        
      </div>
      <div className="font line1">
        <b>오시는 길</b>
      </div>
    </StCC3>
  );
};
const StCC3 = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.resWpx(32, theme)};
  margin-bottom: ${({ theme }) => theme.resHpx(116, theme)};

  .line0 {
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    margin-bottom: ${({ theme }) => theme.resHpx(10, theme)};
  }
  .line1 {
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    margin-bottom: ${({ theme }) => theme.resHpx(32, theme)};
    word-break: keep-all;

    .donation {
      color: #3279bb;
    }
  }
  .line2 {
    display: flex;
    flex-wrap: wrap;
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    white-space: pre-wrap;

    div {
      flex-shrink:0 ;
      color: #3279bb;
    }
  }
`;
