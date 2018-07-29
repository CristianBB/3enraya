import { tint, desaturate } from 'polished';

const basicColors = {
  black: '#000',
  white: '#fff',
  primary: '#EF3B10',
  secondary: desaturate(0.9, '#0099cc'),
  success: 'green',
  danger: 'red',
};

const theme = {
  colors: {
    ...basicColors,
    grayDark: tint(0.8, basicColors.black),
    grayLight: tint(0.1, basicColors.black),
  },
};

export default theme;
