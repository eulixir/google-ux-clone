import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 13px arial, sans-serif;
  color: rgb(46, 46, 46);
  cursor: pointer;
  position: relative;
`;

export const UserIcon = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Gmail = styled.a`
  position: absolute;
  right: 210px;
  cursor: pointer;
  &:hover {
    text-decoration: underline solid rgb(46, 46, 46);
  }
`;

export const Img = styled.a`
  position: absolute;
  right: 135px;
  cursor: pointer;
  &:hover {
    text-decoration: underline solid rgb(46, 46, 46);
  }
`;

export const GridIcon = styled.div`
  position: absolute;
  right: 90px;
  color: rgb(115, 115, 115);
  cursor: pointer;
  &:hover {
    color: rgb(46, 46, 46);
  }
`;
