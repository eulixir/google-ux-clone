import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './global.css';
import * as S from './Global';
import GlobalStyle from './Global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

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
