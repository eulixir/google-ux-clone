import React from 'react';
import './body.css';
import { IoIosSearch } from 'react-icons/io';
import { FaKeyboard } from 'react-icons/fa';
import { BodyContainer } from './body';

export default function Body() {
  return (
    <BodyContainer>
      <div className="logoContainer">
        <span style={{ color: '#4285f4' }}>G</span>
        <span style={{ color: '#ea4335' }}>o</span>
        <span style={{ color: '#fbbc05' }}>o</span>
        <span style={{ color: '#4285f4' }}>g</span>
        <span style={{ color: '#34a853' }}>l</span>
        <span id="e" style={{ color: '#ea4335' }}>
          e
        </span>
      </div>
      <div className="searchContainer">
        <div className="searchIconContainer">
          <IoIosSearch id="search" size={20} />
        </div>
        <div className="inputTextContainer">
          <input type="text" />
        </div>
        <div className="keyboardContainer">
          <FaKeyboard id="keyboard" size="20" />
        </div>
        <div className="micContainer">
          <svg>
            <path
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
              fill="#4285f4"
            ></path>
            <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
            <path
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
              fill="#f4b400"
            ></path>
            <path
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
              fill="#ea4335"
            ></path>
          </svg>
        </div>
      </div>
      <div className="buttonsContainer">
        <button>Pesquisa Google</button>
        <button>Estou com sorte</button>
      </div>
      <div className="textContainer">
        <span>
          Disponibilizado pelo Google em: <span>English</span>
        </span>
      </div>
    </BodyContainer>
  );
}
