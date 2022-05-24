import React, { FC } from 'react';

//* Components
import { Header } from 'components';

//* Styles
import * as S from './styles';

const App: FC = () => {
  return (
    <S.Home>
      <Header />
    </S.Home>
  );
};

export default App;
