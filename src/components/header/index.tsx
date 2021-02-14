import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import * as S from './header';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.SwitchContainer>dsdsds</S.SwitchContainer>
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
}
