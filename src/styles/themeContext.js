import { css } from 'styled-components';

const calcRem = (size) => `${size / 16}rem`;
// ${({theme}) => theme.resWpx(0, theme)}
const resWpx = (width, theme) => `${width * theme.appWidth / (theme.isMobile ? 750 : 1920)}px`;
// ${({theme}) => theme.resHpx(0, theme)}
const resHpx = (height, theme) => `${height * theme.appHeight / (theme.isMobile ? 1624 : 1080)}px`;

// ${({theme}) => theme.flex('', '', '')}
const flex = (_jc = 'normal', _ai = 'stretch', _dir = 'row') =>
  css`
  display: flex;
  justify-content: ${_jc};
  align-items: ${_ai};
  flex-direction: ${_dir};
`;

// ${({theme}) => theme.backImg('', '', '')}
const backImg = (_img = '', _pos = 'center', _size = 'cover') =>
  css`
  background-image: url(${_img});
  background-position: ${_pos};
  background-size: ${_size};
  background-repeat: no-repeat;
`;

const selectNone = css`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;
const selectable = css`
  -ms-user-select: text;
  -moz-user-select: -moz-text;
  -khtml-user-select: text;
  -webkit-user-select: text;
  user-select: text;
  -webkit-user-drag: text;
  -khtml-user-drag: text;
  -moz-user-drag: text;
  -o-user-drag: text;
`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const colors = {
  icon: "#0F1724",
  main: "#582ED1",
  mainLight: "#826DFF",
  mainXLight: "#B2B8FA",
  mainXXLight: "#e1e3ff",
  background: "#F2F6FC",
  parcelColor1: '#FF5A59',
  parcelColor2: '#EF1414',
  parcelColor3: '#B76164',
  realColor1: '#738096',
  realColor2: '#826DFF',
  realColor3: '#3A15A5'
};

const theme = {
  fontSizes,
  colors,
  calcRem,
  resWpx,
  resHpx,
  flex,
  backImg,
  selectNone,
  selectable,
  navHeight: '72px',
};

export default theme;