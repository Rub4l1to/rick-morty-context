import React, { FC } from 'react';

//* Assets
import logo from 'assets/images/logo.png';

//* Styles
import * as S from './styles';

export const Search: FC = () => {
  return (
    <S.Search>
      <S.Search__Box>
        <S.Search__Seeker placeholder="Search..." />
      </S.Search__Box>
    </S.Search>
  );
};
