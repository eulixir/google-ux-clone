import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.background};
  }

`;

export default GlobalStyle;
