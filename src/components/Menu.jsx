import { Slant as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
      <div className="menu">
        <div className="menu-mobile">
          <Hamburger className="menu-burger" toggled={isOpen} toggle={setOpen} />
          <div className={`menu-mobile__content ${isOpen ? 'open' : ''}`}>
            <ul className="menu-mobile__list">
              <li className="menu__item">
                <a className="menu__link" href="#home" onClick={() => setOpen(false)}>
                  home
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#about" onClick={() => setOpen(false)}>
                  about me
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#services" onClick={() => setOpen(false)}>
                  services
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#works" onClick={() => setOpen(false)}>
                  works
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link menu__link--contact" href="#contact" onClick={() => setOpen(false)}>
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-desktop">
          <div className="menu-desktop__inner">
            <a className="menu-desktop-logo">
              <img alt="logo" src={logo}></img>
            </a>
            <ul className="menu-desktop__list">
              <li className="menu__item">
                <a className="menu__link" href="#home">
                  home
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#about">
                  about me
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#services">
                  services
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#works">
                  works
                </a>
              </li>
            </ul>
            <ul className="menu-desktop__list menu-desktop__list--second">
              <li className="menu__item">
                <a className="menu__link menu__link--contact" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Menu;
