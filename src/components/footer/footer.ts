import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 10vh;
  background: ${(props) => props.theme.colors.primary};
`;
export const RegionContainer = styled.div`
  font-family: arial, sans-serif;
  font-size: 15px;
  color: #9c9c9c;
  border-top: 1px solid rgba(0, 0, 0, 0.116);
  border-bottom: 1px solid rgba(0, 0, 0, 0.116);
  width: 100vw;
  height: 42px;
  display: flex;
  align-items: center;
  padding-left: 27px;
`;

export const PolicesContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
`;

export const PolicesContainerOne = styled.div`
  width: 100vw;
  font-family: arial, sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme.colors.text};
  display: flex;
`;
export const FooterSpace = styled.div`
  width: 100%;
`;

export const ContainerSpan = styled.span`
  margin: 15px;
  margin-left: 25px;
`;

export const PolicesContainerTwo = styled.div`
  font-family: arial, sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: right;
`;

export const ContainerTwoSpan = styled.span`
  margin: 15px;
  margin-left: 25px;
`;
