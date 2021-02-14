import React, { useContext } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import * as S from './header';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <S.HeaderContainer>
      <S.SwitchContainer>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offHandleColor="#e0e0e0"
          onHandleColor="#fff"
          offColor="#969696"
          onColor="#c9c9c9"
        ></Switch>
      </S.SwitchContainer>
      <S.SpaceContainer></S.SpaceContainer>
      <S.GoogleItens>
        <S.Gmail id="gmail">Gmail</S.Gmail>
        <S.Img id="img">Imagens</S.Img>
        <S.GridIcon>
          <CgMenuGridO id="gridIcon" size="25" />
        </S.GridIcon>
        <S.UserIcon className="userIcon" />
      </S.GoogleItens>
    </S.HeaderContainer>
  );
};
export default Header;
