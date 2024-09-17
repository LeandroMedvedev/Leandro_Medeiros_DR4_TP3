import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const { scrollToTop } = styles;

const ScrollToTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const raiseUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button className={scrollToTop} onClick={raiseUp}>
        &#8593;
      </button>
    )
  );
};

export default ScrollToTopIcon;
