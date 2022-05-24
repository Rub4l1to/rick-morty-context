import { css } from 'styled-components';

//* Interfaces
import { Flexbox, SpaceSize } from 'interfaces/styles/mixins';

export const mxFlexbox = ({ flexDirection, justifyContent, alignItems }: Flexbox) => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const PaddingInlineSize = ({ start = 0, end = 0 }: SpaceSize) => css`
  padding-inline-start: ${start}rem;
  padding-inline-end: ${end}rem;
`;

export const PaddingBlockSize = ({ start = 0, end = 0 }: SpaceSize) => css`
  padding-block-start: ${start}rem;
  padding-block-end: ${end}rem;
`;

export const MarginInlineSize = ({ start = 0, end = 0 }: SpaceSize) => css`
  margin-inline-start: ${start}rem;
  margin-inline-end: ${end}rem;
`;

export const MarginBlockSize = ({ start = 0, end = 0 }: SpaceSize) => css`
  margin-block-start: ${start}rem;
  margin-block-end: ${end}rem;
`;
