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
        text: "This shoot was a spontaneous idea and it became one of my favorites. One of the best things about photography is bringing to life a vision that you have in the moment. The day before, I had the idea of shooting with golden grass and having my model hold my x100v. Ive seen it done before by marco and had inspo images ready. I had wanted to do a shoot like this for a long time. Now that it was finally summer, it was perfect for that. It was sunny and the grass was golden. I had shot here before last summer and during the winter. I had seen this place in almost all seasons and it looked the best in summer. I posted on my story the day before asking who wanted to shoot in Palo Alto. I was lucky that Nicole was available. This was my fourth time taking pics with her. Nicole had the perfect personality for the vibe that I wanted. Nicole is always fun to shoot with and I genuinely enjoy each shoot with her. She made it easy to get the shots that I wanted and more. I took some video in the last 20 minutes of the shoot. I always struggle with doing video and photo in the same session. It’s something that I need to work on. I get super frustrated when I mess up with my video settings and waste precious time when the conditions are perfect. I was rushing and fumbling with my gear trying to get my gimbal calibrated and ready while the sun was setting over the horizon. By the time everything was ready, the sun had already set which was a bummer. I had been wanting to do more video portraits with backlighting but once again, I wasn’t good enough at timing everything right. We still shot some video but I felt like I could have done much better. At the end of the day, I got the photos that I wanted and that’s what mattered for this shoot. I have always been a photo-first creative so when the photos turn out fine and the video turns out not how I expected, I’m still kind of satisfied but just disappointed in myself. Especially now that I want to get more serious with video portraits. I’m still learning and practicing but it feels terrible when you don’t meet your own expectations. We ended the shoot with getting boba and hanging out. All in all, this shoot was a success and makes me look forward to more shoots with Nicole.",
      },
      {
        type: 'image',
        imageUrl: "/DSC00624.jpg",
      },
      {
        type: 'text',
        text: "",
      },
      // Add more content sections (image and text pairs) as needed
    ],
  },
//   {
//     title: "Second Blog Post",
//     timestamp: "2023-07-28 09:45 AM",
//     content: [
//       {
//         type: 'image',
//         imageUrl: "/path/to/second-image-1.jpg",
//       },
//       {
//         type: 'text',
//         text: "This is the content of the first section of the second blog post...",
//       },
//       {
//         type: 'image',
//         imageUrl: "/path/to/second-image-2.jpg",
//       },
//       {
//         type: 'text',
//         text: "This is the content of the second section of the second blog post...",
//       },
//       // Add more content sections (image and text pairs) as needed
//     ],
//   },
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
                    <Image src={section.imageUrl} alt={`${post.title} - Image ${sectionIndex + 1}`} width={600} height={600} />
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
