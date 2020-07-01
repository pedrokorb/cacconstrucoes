import React from 'react';

import Logo from '../../../content/assets/logobranco.png';

export default function Footer(props) {

  return (
    <div style={{ backgroundColor: '#2D2A7E' }}>
      <div className="flex border-t border-white mx-10 justify-center items-center text-white">
        © {new Date().getFullYear()}, desenvolvido por
        <a href={props.logoLink} target="_blank" rel="noreferrer">
          <img className="w-26 h-16 m-2" src={Logo} alt="logo" />
        </a>
      </div>
    </div>
  );
}