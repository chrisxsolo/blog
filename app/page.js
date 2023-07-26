import Image from 'next/image';
import styles from './page.module.css';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className={styles.title}>
        <h1>Hi. I am Chris.</h1>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <Image src="/DSC07008.jpg" width={200} height={300} />
        </div>
        <div className="grid-item">
          <Image src="/DSC08521.jpg" width={200} height={300} />
        </div>
        <div className="grid-item">
          <Image src="/DSC09817.jpg" width={200} height={300} />
        </div>
        ...
      </div>
    </main>
  );
}