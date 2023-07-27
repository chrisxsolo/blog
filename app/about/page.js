import Image from 'next/image';
import styles from './about.module.css';
import NavBar from '../components/NavBar';
import React from 'react';


export default function About() {
  return (
    <main>
      <div className={styles['navbar-container']}>
        <NavBar />
      </div>
      <div className={styles.title}>
        <h2>It's so good to see you here!</h2>
      </div>
      <div className={styles.subtitle} style={{ textAlign: 'center' }}>
        <p>
          Welcome to my blog! I'm thrilled to share with you the story behind this website,
          which I personally crafted from scratch using Next.js, a powerful and efficient
          framework for building web applications. The entire development process was an
          incredible journey that allowed me to delve into the languages of HTML, CSS, and
          Javascript, honing my coding skills and expanding my knowledge of computer science
          along the way.
          <br /><br />
          This platform was born out of my deep passion for photography and the desire to
          express myself freely by putting my thoughts into writing. It serves as a canvas for
          me to document my musings and reflections, capturing moments and emotions through
          both words and images.
          <br /><br />
          Through this website, I aim to invite you into my world, offering glimpses of my
          photographic endeavors while sharing insights and introspections on various subjects
          close to my heart. The act of self-reflection and creative expression through
          photography has been a transformative experience, and I hope my posts resonate with
          you and inspire you in your own pursuits.
          <br /><br />
          I believe that building this website from the ground up was an invaluable learning
          experience. It allowed me to grasp the intricate workings of web development, the
          magic of turning lines of code into a visually appealing and interactive space. As
          technology evolves, so does my understanding of it, and this platform continues to
          serve as a dynamic space for me to keep abreast of the latest advancements in the
          digital realm.
          <br /><br />
          Thank you for being a part of this journey with me. I'm excited to share my
          thoughts, photography, and discoveries with you as we grow together through this
          virtual lens. May this platform foster creativity, curiosity, and a sense of
          connection as we explore the art of photography and life's many wonders.
        </p>
      </div>
    </main>
  );
}
