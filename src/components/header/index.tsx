import React from 'react';
import Akali from '../../assets/Akali.jpeg';

import './header.css';

export default function Header() {
  return (
    <div className="headerContainer">
      <a>Gmail</a>
      <a>Imagens</a>
      {/* Box icons */}
      <img src={Akali} alt="" />
    </div>
  );
}
