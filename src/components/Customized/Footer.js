import React from 'react';

import Logo from '../../../content/assets/logobranco.png';

export default function Footer(props) {

  return (
    <div style={{ backgroundColor: props.backgroundColor, color: props.textColor }}>
      <div className="container">
        <div className="flex border-t border-white mx-10 justify-center items-center">
          © {new Date().getFullYear()}, desenvolvido por
          <a href={props.logoLink} target="_blank" rel="noreferrer">
            <img className="m-2" src={Logo} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}