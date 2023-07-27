"use client";
import styles from './blog.module.css';
import NavBar from '../components/NavBar';
import React from 'react';


export default function Blog() {
  return (
    <main>
      <div className={styles['navbar-container']}>
        <NavBar />
      </div>
      <div className={styles.title}>
        <h2>Thoughts.</h2>
      </div>
    </main>
  );
}
