import React from 'react';
import ReactDOM from 'react-dom/client';

//* Styled components
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Theme } from 'styles';

//* Screens
import Home from 'screens/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
