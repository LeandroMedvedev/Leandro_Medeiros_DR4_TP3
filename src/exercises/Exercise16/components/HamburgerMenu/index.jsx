import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';

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

  // Bloquear o scroll quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    } else {
      document.body.style.overflow = 'auto'; // Liberar scroll
    }

    // Limpar o efeito quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.hamburger} ${isOpen && styles.active}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
      <nav
        ref={menuRef}
        className={`${styles.menuOptions} ${isOpen && styles.showMenu}`}
      >
        <ul>
          <li>
            <a href="#aboutMe" onClick={() => setIsOpen(false)}>
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setIsOpen(false)}>
              Educação
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
