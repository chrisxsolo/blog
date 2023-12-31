import Image from 'next/image';
import styles from './page.module.css';
import NavBar from './components/NavBar';

const images = [
  '/DSC07008.jpg',
  '/DSC09817.jpg',
  '/DSC08521.jpg',
  '/DSC09740-4.jpg',
  '/DSC05402.jpg',
  '/DSC03189.jpg',
  // Add more image URLs here
];
// PhotoGallery component
const PhotoGallery = () => {
  return (
    <div className={styles.gallery}>
      {/* Map through the images array and create a gallery item for each image */}
      {images.map((imageUrl, index) => (
        // Use the index as the key for the gallery item (consider using a unique ID if possible)
        <div key={index} className={styles['gallery-item']}>
          {/* Use next/image to display the image with a specific width and height */}
          <Image src={imageUrl} alt={`Image ${index + 1}`} width={200} height={300} />
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div className={styles.title}>
        <h1>Hi. I am Chris.</h1>
      </div>
      <div className = {styles.subtitle}> 
      <p>I'm a bay area portrait photographer based in San Francisco, CA</p>
      </div>
      <PhotoGallery />
    </main>
  );
}