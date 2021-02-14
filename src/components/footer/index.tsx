import React from 'react';
import * as S from './footer';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.RegionContainer>Brasil</S.RegionContainer>
      <S.PolicesContainer>
        <S.PolicesContainerOne>
          <S.ContainerSpan>Privacidade</S.ContainerSpan>
          <S.ContainerSpan>Termos</S.ContainerSpan>
          <S.ContainerSpan>Configurações</S.ContainerSpan>
        </S.PolicesContainerOne>
        <S.PolicesContainerTwo>
          <S.ContainerTwoSpan>Publicidade</S.ContainerTwoSpan>
          <S.ContainerTwoSpan>Negócios</S.ContainerTwoSpan>
          <S.ContainerTwoSpan>Sobre</S.ContainerTwoSpan>
          <S.ContainerTwoSpan>Como funciona a pesquisa</S.ContainerTwoSpan>
        </S.PolicesContainerTwo>
      </S.PolicesContainer>
    </S.FooterContainer>
  );
}
