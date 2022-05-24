import React, { FC } from 'react';

//* Assets
import logo from 'assets/images/logo.png';

//* Components
import { Search } from 'components';

//* Styles
import * as S from './styles';

export const Header: FC = () => {
  return (
    <S.Header>
      <S.Header__Nav>
        <S.Header__LogoContainer>
          <S.Header__Logo src={logo} alt="Logo" />
        </S.Header__LogoContainer>
      </S.Header__Nav>
      <Search />
    </S.Header>
  );
};
