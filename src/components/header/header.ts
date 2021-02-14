import styled from 'styled-components';
import akali from '../../assets/Akali.jpeg';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  display: grid;
  grid-template-columns: 10% 75% 15%;
  justify-content: center;
  align-items: center;
  font: 13px arial, sans-serif;
  color: rgb(46, 46, 46);
`;
export const SwitchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GoogleItens = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SpaceContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const UserIcon = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: url(${akali});
  background-position: bottom;
  background-size: cover;
`;
export const Gmail = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline solid rgb(46, 46, 46);
  }
`;

export const Img = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline solid rgb(46, 46, 46);
  }
`;

export const GridIcon = styled.div`
  color: rgb(115, 115, 115);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: rgb(46, 46, 46);
  }
`;
