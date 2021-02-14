import React from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import * as S from './header';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Gmail id="gmail">Gmail</S.Gmail>
      <S.Img id="img">Imagens</S.Img>
      <S.GridIcon>
        <CgMenuGridR id="gridIcon" size="30" />
      </S.GridIcon>
      <S.UserIcon className="userIcon" />
    </S.HeaderContainer>
  );
}
