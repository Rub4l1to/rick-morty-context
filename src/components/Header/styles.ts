import styled from 'styled-components';

//* Mixins
import { PaddingBlockSize, PaddingInlineSize } from 'styles/mixins';

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  box-shadow: 5px 5px 10px -9px rgba(133, 133, 133, 1);
`;

export const Header__Nav = styled.nav`
  grid-column: 1/2;
  ${PaddingBlockSize({ start: 1, end: 2 })}
  ${PaddingInlineSize({ start: 2, end: 2 })}
`;

export const Header__LogoContainer = styled.figure`
  display: flex;
  max-inline-size: 220px;
`;

export const Header__Logo = styled.img`
  object-fit: contain;
  inline-size: 100%;
`;
