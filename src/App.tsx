import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './global.css';
import * as S from './Global';
import GlobalStyle from './Global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
