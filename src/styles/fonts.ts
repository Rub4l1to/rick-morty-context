import { css } from 'styled-components';

//* Assets
import { Dosis, Roboto } from 'assets/fonts';

export const FontsFaces = css`
  //---- Roboto
  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${Roboto.Regular}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto-Medium';
    src: url(${Roboto.Medium}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto-Bold';
    src: url(${Roboto.Bold}) format('truetype');
  }

  //---- Dosis
  @font-face {
    font-family: 'Dosis-Regular';
    src: url(${Dosis.Regular}) format('truetype');
  }
  @font-face {
    font-family: 'Dosis-Medium';
    src: url(${Dosis.Medium}) format('truetype');
  }
  @font-face {
    font-family: 'Dosis-Semibold';
    src: url(${Dosis.Semibold}) format('truetype');
  }
  @font-face {
    font-family: 'Dosis-Black';
    src: url(${Dosis.Black}) format('truetype');
  }
`;
