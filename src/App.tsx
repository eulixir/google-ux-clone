import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './global.css';
import * as S from './Global';

function App() {
  return (
    <S.App>
      <Header />
      <Body />
      <Footer />
    </S.App>
  );
}

export default App;
