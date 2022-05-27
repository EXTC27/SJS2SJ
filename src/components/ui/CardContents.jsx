import React, { useContext } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@mui/material";
import { MainPageStateContext } from "../../context/stateContext";
import contentJSON from "../../assets/contents.json";
import miniProfile0 from "../../assets/images/profile/mini-profile0.png";
import miniProfile1 from "../../assets/images/profile/mini-profile1.png";

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
          "2022년 7월 2일 토요일 오후 2시\n서울 정동 프란치스코 교육회관 성당\n\n성실하고 똑부러지는 🤵🏻신재와\n센스있고 사랑스러운 👰🏻‍♀️세진이가 만나서\n같은 곳을 바라보며 함께 걸어가려합니다.\n많은 축하 부탁드립니다. 🎊🎉☺️👏👏"
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
        <img src={miniProfile0} alt={`${miniProfile0}`} /> <b>신부 세진</b>
        &nbsp;외&nbsp;<b>여러 명</b>이 좋아합니다.
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
        <img src={miniProfile1} alt={`${miniProfile1}`} /> <b>신랑 신재</b>
        &nbsp;외&nbsp;<b>여러 명</b>이 좋아합니다.
      </div>
      <div className="font line1">
        <b>우리 세진이는_</b>
      </div>
      <div className="font line2">
        {contentJSON["cardData"][2]["tag"].map((el, idx) => (
          <div key={idx}>{el}</div>
        ))}
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
      flex-shrink: 0;
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
        <b>• 화환 💐</b>
        <div>
          성당 내에 <b className="red">화환을 반입할 수 없습니다.</b>
          <br />
          화환을 대신하여 어려운 이웃을 위해
          <br />
          <b>사랑의 쌀</b> 혹은 <b>성금</b> 기부 부탁드립니다. 🤗
          <br />
        </div>
      </div>
      <div className="btn-cont">
        <CopyToClipboard
          text={"하나은행 15889003391004"}
          onCopy={(text) => {
            setPopToast(`계좌가 복사되었습니다\n${text}`);
          }}
        >
          <Button className="donation cash" variant="contained">
            성금 계좌 복사하기
          </Button>
        </CopyToClipboard>
        <Button
          className="donation rice"
          variant="contained"
          onClick={() => {
            window.open(
              "http://www.fec.or.kr/bbs/board.php?bo_table=pds&wr_id=2",
              "_blank"
            );
          }}
        >
          사랑의 쌀 기부하러가기
        </Button>
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
    margin-bottom: ${({ theme }) => theme.resHpx(36, theme)};
    word-break: keep-all;
  }
  .btn-cont {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    .donation {
      background: black;
    }

    .cash {
      margin-bottom: ${({ theme }) => theme.resHpx(24, theme)};
    }
  }
`;

export const CardContents4 = () => {
  const { setPopToast } = useContext(MainPageStateContext);
  return (
    <StCC4>
      <div className="font line0">
        <b>오시는 길_</b>
      </div>
      <div className="font line1">
        <b>• 주소 🗺</b>
        <div className="address">
          서울시 중구 정동길 9 프란치스코 교육회관
          <CopyToClipboard
            text="서울시 중구 정동길 9"
            onCopy={() => {
              setPopToast("성당 주소가 복사되었습니다.");
            }}
          >
            <Button>복사</Button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="font line1">
        <b>• 문의 📞</b>
        <div>02. 6364. 2245</div>
      </div>
      <div className="font line1">
        <b>• 지하철 🚈</b>
        <div className="subway-0">
          <b className="purple">5호선</b> 서대문역 <b>5번 출구</b>
          <br />
          경향신문사 방면 5분
        </div>
        <div>
          <b className="blue">1호선</b>, <b className="green">2호선</b>{" "}
          시청역&nbsp;
          <b>1,2,12번 출구</b>
          <br />
          덕수궁 방면, 덕수궁길 따라 15분
        </div>
      </div>
      <div className="font line1">
        <b>• 시내버스 🚍</b>
        <div className="bus-stop">서울역사박물관 앞 하차</div>
        <table>
          <tbody>
            <tr>
              <th>
                <b className="red">광역버스</b>
              </th>
              <td>9701, 9709, 9710, 1004, 8600, 8601, 9709A</td>
            </tr>
            <tr>
              <th>
                <b className="blue">간선버스</b>
              </th>
              <td>
                101, 103, 160, 260, 270, 271, 273, 370, 470, 600, 601, 602,
                702A, 702B, 704, 705, 720, 721, 741
              </td>
            </tr>
            <tr>
              <th>
                <b className="green">일반버스</b>
              </th>
              <td className="last-td">1002, 7019</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="font line1">
        <b>• 주차 🚘</b>
        <div className="parking">이화정동빌딩 주차장</div>
        <div className="address">
          서울시 중구 정동길 17
          <CopyToClipboard
            text="서울시 중구 정동길 17"
            onCopy={() => {
              setPopToast("주차장 주소가 복사되었습니다.");
            }}
          >
            <Button>복사</Button>
          </CopyToClipboard>
        </div>
      </div>
    </StCC4>
  );
};
const StCC4 = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.resWpx(32, theme)};
  margin-bottom: ${({ theme }) => theme.resHpx(116, theme)};

  .line0 {
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    margin-bottom: ${({ theme }) => theme.resHpx(10, theme)};
  }
  .line1 {
    width: 100%;
    font-size: ${({ theme }) => theme.resWpx(32, theme)};
    line-height: calc(46 / 32);
    margin-bottom: ${({ theme }) => theme.resHpx(54, theme)};
    word-break: keep-all;

    .address {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .MuiButton-root {
      min-width: 0px;
      padding: 8px;

      color: white;
      background-color: black;
      font-size: ${({ theme }) => theme.resWpx(24, theme)};
      line-height: 1;
      letter-spacing: 0;
    }

    .subway-0 {
      margin-bottom: ${({ theme }) => theme.resHpx(12, theme)};
    }

    .bus-stop,
    .parking {
      margin: ${({ theme }) => theme.resHpx(18, theme)} 0;
    }
    th {
      padding-right: ${({ theme }) => theme.resWpx(48, theme)};
    }
    td {
      padding-bottom: ${({ theme }) => theme.resHpx(32, theme)};
      &.last-td {
        padding-bottom: 0;
      }
    }
  }
`;
