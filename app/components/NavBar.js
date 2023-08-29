// components/Navbar.js
import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles['navbar-container']}> {/* Add the container class here */}
      <nav className={styles.navbar}>
        <ul className={styles['navbar-nav']}>
          <li className={styles['nav-item']}>
            <a href="/" className={styles['nav-link']}>
              Home
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href="/blog" className={styles['nav-link']}>
              Blog
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href="/about" className={styles['nav-link']}>
              About
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href="/blogPage" className={styles['nav-link']}>
              Blog Page
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href="/submit-blog" className={styles['nav-link']}>
              Submit a Blog!
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
