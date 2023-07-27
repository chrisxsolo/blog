import Image from 'next/image';
import styles from './about.module.css';
import NavBar from '../components/NavBar';


export default function About() {
  return (
    <main>
     <div className={styles['navbar-container']}>
        <NavBar />
      </div>
     <div className = {styles.title}>
        <h1>A place to write down my thoughts.</h1>
     </div>
    </main>
  );
}