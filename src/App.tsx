import React, { useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './global.css';
import * as S from './Global';
import GlobalStyle from './Global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  const toggletheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggletheme} />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
