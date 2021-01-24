import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="regionContainer">Brasil</div>
      <div className="policesContainer">
        <div className="policesContainerOne">
          <span>Privacidade</span>
          <span>Termos</span>
          <span>Configurações</span>
        </div>
        <div className="policesContainerTwo">
          <span>Publicidade</span>
          <span>Negócios</span>
          <span>Sobre</span>
          <span>Como funciona a pesquisa</span>
        </div>
      </div>
    </div>
  );
}
