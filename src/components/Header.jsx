import React from 'react';
import { AiFillSetting } from 'react-icons/ai';

function Header() {
  return (
    <header>
      <h1 className="title-page">CountDown</h1>
      <AiFillSetting className="setting-icon" />
    </header>
  );
}

export default Header;
