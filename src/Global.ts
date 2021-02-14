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
    background-color: #d3d3d3;
  }

`;

export const App = styled.div`
  /* overflow: hidden; */
`;

export default GlobalStyle;
