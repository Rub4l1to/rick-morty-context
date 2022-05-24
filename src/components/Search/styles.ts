import styled from 'styled-components';

//* Mixins
import { mxFlexbox, PaddingBlockSize, PaddingInlineSize } from 'styles/mixins';

export const Search = styled.div`
  grid-column: 3/4;
  ${mxFlexbox({ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' })}
`;

export const Search__Box = styled.div`
  inline-size: 100%;
  ${PaddingInlineSize({ start: 2, end: 2 })}
  ${mxFlexbox({ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' })}
`;

export const Search__Seeker = styled.input`
  ${PaddingBlockSize({ start: 1.5, end: 1.5 })}
  ${PaddingInlineSize({ start: 1.5, end: 1.5 })}
  inline-size: 100%;
  background-color: #fff;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  border: none;
  background-color: ${({ theme: { colors } }) => colors.third};
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 18px;
  transition: all 300ms;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: $main-color-letter;
    font-size: 18px;
    font-weight: 700;
  }
`;
