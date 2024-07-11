import { Slant as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import logo from '../assets/logo.png'

const Menu = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="menu">
      <div className="menu-mobile">
        <Hamburger className="menu-burger" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="menu-desktop">
        <div className="menu-desktop__inner">
          <a className="menu-desktop-logo">
            {' '}
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
  )
}

export default Menu
