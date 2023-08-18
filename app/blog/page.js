// pages/blog.js
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './blog.module.css';
import NavBar from '../components/NavBar';


const initialBlogPosts = [
    {
      title: "Shoot with Nicole: Finding Balance",
      timestamp: "July 26th, 2023 ",
      content: [
        {
          type: 'image',
          imageUrl: "/DSC00512.jpg",
        },
        {
          type: 'text',
          text: "This shoot was a spontaneous idea and it became one of my favorites. One of the best things about photography is bringing to life a vision that you have in the moment. The day before, I had the idea of shooting with golden grass and having my model hold my x100v. Ive seen it done before by marco and had inspo images ready. I had wanted to do a shoot like this for a long time. Now that it was finally summer, it was perfect for that. It was sunny and the grass was golden. I had shot here before last summer and during the winter. I had seen this place in almost all seasons and it looked the best in summer. I posted on my story the day before asking who wanted to shoot in Palo Alto. I was lucky that Nicole was available. This was my fourth time taking pics with her. Nicole had the perfect personality for the vibe that I wanted. Nicole is always fun to shoot with and I genuinely enjoy each shoot with her. She made it easy to get the shots that I wanted and more. I took some video in the last 20 minutes of the shoot. I always struggle with doing video and photo in the same session. It’s something that I need to work on. I get super frustrated when I mess up with my video settings and waste precious time when the conditions are perfect. I was rushing and fumbling with my gear trying to get my gimbal calibrated and ready while the sun was setting over the horizon. By the time everything was ready, the sun had already set which was a bummer. I had been wanting to do more video portraits with backlighting but once again, I wasn’t good enough at timing everything right. We still shot some video but I felt like I could have done much better. At the end of the day, I got the photos that I wanted. I have always been a photo-first creative so when the photos turn out fine and the video turns out not how I expected, I’m still kind of satisfied but just disappointed in myself. Especially now that I want to get more into video portraits. I’m still learning and practicing but it feels terrible when you don’t meet your own expectations. We ended the shoot with getting boba and hanging out. All in all, this shoot was a success and makes me look forward to more shoots with Nicole.",
        },
        // {
        //   type: 'image',
        //   imageUrl: "/DSC00624.jpg",
        // },
        // {
        //   type: 'text',
        //   text: "",
        // },
        // Add more content sections (image and text pairs) as needed
      ],
      likes: 0, // Initialize the likes for this post to 0
      
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

// Define the main functional component for the Blog page
export default function Blog() {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [likedPosts, setLikedPosts] = useState({});
  const handleLikeClick = async (index) => {
    if (!likedPosts[index]) {
      try {
        const response = await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postId: index }),
        });

        if (response.ok) {
          const updatedLikes = await response.json();

          setBlogPosts((prevPosts) => {
            const updatedPosts = [...prevPosts];
            updatedPosts[index].likes = updatedLikes.likes;
            return updatedPosts;
          });

          setLikedPosts((prevLikedPosts) => ({
            ...prevLikedPosts,
            [index]: true,
          }));
        } else {
          console.error('Failed to add like');
        }
      } catch (error) {
        console.error('Error adding like:', error);
      }
    }
  };

  useEffect(() => {
    // Fetch liked post data from the server and populate the likedPosts state
    const fetchLikedPosts = async () => {
      try {
        const response = await fetch('/api/data', {
          method: 'GET',
        });

        if (response.ok) {
          const likedPostsData = await response.json();
          const likedPostsMap = likedPostsData.reduce((acc, likedPost) => {
            acc[likedPost.postId] = true;
            return acc;
          }, {});
          setLikedPosts(likedPostsMap);
        } else {
          console.error('Failed to fetch liked posts');
        }
      } catch (error) {
        console.error('Error fetching liked posts:', error);
      }
    };

    fetchLikedPosts();
  }, []);

  
    return (
      <main>
        <div className={styles['navbar-container']}>
          <NavBar />
        </div>
        <div className={styles.title}>
          <h2>My thoughts.</h2>
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
                      <Image src={section.imageUrl} alt={`Image ${sectionIndex + 1}`} width={400} height={600} />
                    </div>
                  )}
  
                  {section.type === 'text' && (
                    <div className={styles['content-text']}>
                      <p>{expandedPosts[index] ? section.text : section.text.slice(0, 400)}</p>
                    </div>
                  )}
                </div>
              ))}
  
              {post.content.some((section) => section.type === 'text' && section.text.length > 400) && (
                <div className={styles['read-more-container']}>
                  <button onClick={() => handleReadMoreClick(index)} className={styles['read-more']}>
                    {expandedPosts[index] ? 'Collapse' : 'Read More'}
                  </button>
                </div>
              )}
  
              <div className={styles['like-container']}>
                <button
                  onClick={() => handleLikeClick(index)}
                  className={styles['like-button']}
                  disabled={likedPosts[index]}
                >
                  {likedPosts[index] ? 'Liked' : 'Like'}
                </button>
                <span className={styles['like-count']}>{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    );
  }