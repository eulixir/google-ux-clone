import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import * as S from './header';
import Switch from 'react-switch';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.SwitchContainer>
        {/* <Switch
          onChange={ }
          checked={false}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}


        ></Switch> */}
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
}
