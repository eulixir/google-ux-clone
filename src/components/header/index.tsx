import React from 'react';
import Akali from '../../assets/Akali.jpeg';
import { CgMenuGridR } from 'react-icons/cg';

import './header.css';

export default function Header() {
  return (
    <div className="headerContainer">
      <a id="gmail">Gmail</a>
      <a id="img">Imagens</a>
      <CgMenuGridR id="gridIcon" size="30" />
      <div className="userIcon" />
    </div>
  );
}
