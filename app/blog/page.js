// pages/blog.js
import React from 'react';
import Image from 'next/image';
import styles from './blog.module.css';
import NavBar from '../components/NavBar';

const blogPosts = [
  {
    title: "Shoot with Nicole",
    timestamp: "2023-07-26 ",
    content: [
      {
        type: 'image',
        imageUrl: "/DSC00512.jpg",
      },
      {
        type: 'text',
        text: "This is the content of the first section...",
      },
      {
        type: 'image',
        imageUrl: "/DSC00624.jpg",
      },
      {
        type: 'text',
        text: "This is the content of the second section...",
      },
      // Add more content sections (image and text pairs) as needed
    ],
  },
  {
    title: "Second Blog Post",
    timestamp: "2023-07-28 09:45 AM",
    content: [
      {
        type: 'image',
        imageUrl: "/path/to/second-image-1.jpg",
      },
      {
        type: 'text',
        text: "This is the content of the first section of the second blog post...",
      },
      {
        type: 'image',
        imageUrl: "/path/to/second-image-2.jpg",
      },
      {
        type: 'text',
        text: "This is the content of the second section of the second blog post...",
      },
      // Add more content sections (image and text pairs) as needed
    ],
  },
  // Add more blog posts to the array as needed
];

export default function Blog() {
  return (
    <main>
      <div className={styles['navbar-container']}>
        <NavBar />
      </div>
      <div className={styles.title}>
        <h2>Thoughts.</h2>
      </div>
      {blogPosts.map((post, index) => (
        <div key={index} className={styles.blogPost}>
          <div className={styles['blog-title']}>
            <h3>{post.title}</h3>
            <p className={styles['timestamp']}>{post.timestamp}</p>
          </div>
          <div className={styles['blog-content']}>
            {post.content.map((section, sectionIndex) => (
              <div key={sectionIndex} className={styles['content-section']}>
                {section.type === 'image' && (
                  <div className={styles['blog-img']}>
                    <Image src={section.imageUrl} alt={`${post.title} - Image ${sectionIndex + 1}`} width={400} height={600} />
                  </div>
                )}
                {section.type === 'text' && (
                  <div className={styles['content-text']}>
                    <p>{section.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
