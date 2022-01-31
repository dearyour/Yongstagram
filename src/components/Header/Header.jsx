import React from 'react';
import './css/index.scss';
function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo">
          <img src="/assets/welcome/logo.svg" alt="로고"></img>
        </div>
        <nav className="navigation">
          <ul className="nav-wrapper">
            <li className="nav">
              <img src="/assets/header/feed-dac.svg" alt="피드로 가기" />
            </li>
            <li className="nav">
              <img src="/assets/header/profile-dac.svg" alt="프로필로 가기" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
