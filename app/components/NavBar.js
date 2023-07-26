import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles['navbar-nav']}>
        <li className={styles['nav-item']}>
          <a href="#" className={styles['nav-link']}>
            Home
          </a>
        </li>
        <li className={styles['nav-item']}>
          <a href="#" className={styles['nav-link']}>
            Blog
          </a>
        </li>
        <li className={styles['nav-item']}>
          <a href="#" className={styles['nav-link']}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
