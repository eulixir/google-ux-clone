import styled from 'styled-components';

export const BodyContainer = styled.div`
  padding-bottom: 71px;
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  font: 600 90px 'Product Sans', sans-serif;
`;

export const SearchContainer = styled.div`
  margin-top: 25px;
  width: 482px;
  height: 44px;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 20px;
  outline: none;
  display: grid;
  grid-template-columns: 10% 70% 10% 10%;

  &:hover {
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.37);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.37);
  }

  &:focus {
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.37);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.37);
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KeyboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
