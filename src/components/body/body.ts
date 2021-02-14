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
export const Search = styled.div`
  color: rgb(134, 134, 134);
`;
export const Keyboard = styled.div`
  color: rgb(105, 105, 105);
`;

export const LogoContainer = styled.div`
  font: 600 90px 'Product Sans', sans-serif;
`;

export const E = styled.span`
  font: 600 115px 'Josefin Sans', sans-serif;
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

export const InputContainer = styled.input`
  width: 100%;
  height: 95%;
  border: none;
  border-bottom: 1px solid rgb(214, 214, 214);
  outline: none;
  font-size: 16px;
`;
export const KeyboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MicContainer = styled.div`
  max-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MicSvg = styled.svg`
  height: 25px;
`;

export const ButtonsContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

export const Buttons = styled.button`
  color: rgb(51, 51, 51);
  height: 36px;
  margin: 11px 4px;
  background-color: #f8f8fa;
  border: 1px solid #f8f8fa;
  font-family: arial, sans-serif;
  font-size: 14px;
  outline: none;
  border-radius: 4px;
  padding: 0 16px;
  line-height: 27px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    border: 1px solid rgb(202, 202, 202);
  }
`;

export const TextContainer = styled.span`
  display: inline-block;
  line-height: 28px;
  font-family: arial, sans-serif;
  font-size: small;
  margin-top: 5px;
`;
export const TextContainerSpan = styled.span`
  color: rgb(0, 0, 196);
  cursor: pointer;

  &:hover {
    color: blue;
    text-decoration: underline solid blue;
  }
`;
