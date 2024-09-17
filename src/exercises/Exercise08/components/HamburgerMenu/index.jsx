import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';

const { active, container, hamburger, menuOptions, showMenu } = styles;

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Fechar o menu se o clique for fora do menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className={container}>
      <div className={`${hamburger} ${isOpen && active}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav ref={menuRef} className={`${menuOptions} ${isOpen && showMenu}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#whoWeAre" onClick={() => setIsOpen(false)}>
              Quem somos
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setIsOpen(false)}>
              Produtos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
