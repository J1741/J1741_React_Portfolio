import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import Navigation  from './Navigation';
import profileBanner from '../media/profile_banner.jpeg';

export default function Header() {
  return (
    <>
    <header className="header d-flex">
      <h1>J1741</h1>
      <Navigation />
    </header>
    <img class="banner-image" src={profileBanner} />
    </>
  );
}