import React from 'react';
import { GiAnticlockwiseRotation, GiShare } from 'react-icons/gi';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className="navbar">
      <GiAnticlockwiseRotation className="icon-navbar" />
      <AiFillPlayCircle className="icon-navbar-play" />
      <GiShare className="icon-navbar" />
    </nav>
  );
}

export default Navbar;