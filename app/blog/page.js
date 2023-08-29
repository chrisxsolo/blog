// pages/blog.js
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './blog.module.css';
import NavBar from '../components/NavBar';


// Define initial data for the blog posts
const initialBlogPosts = [
    {
      postId: 1, // Unique ID for the post
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

// Define the functional component for the Blog page
export default function Blog() {
  // State variables to manage expanded posts, blog posts, and liked posts
  const [postId, setPostId] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [likedPosts, setLikedPosts] = useState({});

  
  
  useEffect(() => {
    const newPostId = Math.floor(Math.random() * 1000000);
    setPostId(newPostId);
  }, []); // Empty dependency array to run the effect only once on initial render



// Function to toggle the expanded state of a post
const toggleExpand = (index) => {
  // prevState holds the previous state of the expandedPosts object
  // Here, we're using the spread operator (...) to create a copy of prevState
  // and then modifying the property at the specified index to its opposite value
  setExpandedPosts((prevState) => ({
    ...prevState,
    [index]: !prevState[index], // Toggles the expanded state
  }));
};
  // Function to handle liking a post
  const likePost = async (postId) => {
    if (!likedPosts[postId]) {
      try {
        const response = await fetch('/api/posts/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postId }), // Send the postId in the request body
        });

      if (response.ok) {
        // If the request is successful, update the likes count for the post
        const updatedLikes = await response.json();
        // Here, we're using the setBlogPosts function to update the blogPosts state
        // We map through the previous posts and if the post id matches the liked post id,
        // we update the likes count; otherwise, we keep the post unchanged
        setBlogPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId ? { ...post, likes: updatedLikes.likes } : post
          )
        );
        // Mark the post as liked by adding it to the likedPosts state
        setLikedPosts((prevLikedPosts) => ({
          ...prevLikedPosts,
          [postId]: true,
        }));
      } else {
        console.error('Failed to add like');
      }
    } catch (error) {
      console.error('Error adding like:', error);
    }
  }
};
 


  // Fetch liked post data from the server on component mount
useEffect(() => {
  const fetchLikedPosts = async () => {
    try {
      // Send a GET request to the server to fetch liked post data
      const response = await fetch('/api/data', {
        method: 'GET',
      });

      if (response.ok) {
        // If the request is successful, fetch the liked post data
        const likedPostsData = await response.json();
        // Convert the likedPostsData array into a map for quick access
        const likedPostsMap = likedPostsData.reduce((acc, likedPost) => {
          acc[likedPost.postId] = true;
          return acc;
        }, {});
        // Update the likedPosts state with the map of liked posts
        setLikedPosts(likedPostsMap);
      } else {
        console.error('Failed to fetch liked posts');
      }
    } catch (error) {
      console.error('Error fetching liked posts:', error);
    }
  };

  // Call the fetchLikedPosts function when the component mounts
  fetchLikedPosts();
}, []);


return (
  <main>
    {/* Render the navigation bar component */}
    <div className={styles['navbar-container']}>
      <NavBar />
    </div>
    {/* Display the title of the blog page */}
    <div className={styles.title}>
      <h2>My thoughts.</h2>
    </div>

    {/* Map through each blog post and render its content */}
    {blogPosts.map((post, index) => (
  <div key={post.postId} className={styles.blogPost}>
  {/* Display the blog post title and timestamp */}
        <div className={styles['blog-title']}>
          <h3>{post.title}</h3>
          <p className={styles['timestamp']}>{post.timestamp}</p>
        </div>
        <div className={styles['blog-content']}>
          {/* Map through each content section of the blog post */}
          {post.content.map((section, sectionIndex) => (
            <div key={sectionIndex} className={styles['content-section']}>
              {/* If the content section is an image, display it */}
              {section.type === 'image' && (
                <div className={styles['blog-img']}>
                  <Image
                    src={section.imageUrl}
                    alt={`Image ${sectionIndex + 1}`}
                    width={400}
                    height={600}
                  />
                </div>
              )}

              {/* If the content section is text, display it */}
              {section.type === 'text' && (
                <div className={styles['content-text']}>
                  {/* If the post is expanded, show the entire text;
                      otherwise, show only the first 400 characters */}
                  <p>
                    {expandedPosts[index] ? section.text : section.text.slice(0, 400)}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Display the "Read More" button if the text is longer than 400 characters */}
          {post.content.some(
            (section) => section.type === 'text' && section.text.length > 400
          ) && (
            <div className={styles['read-more-container']}>
              <button
                onClick={() => toggleExpand(index)}
                className={styles['read-more']}
              >
                {/* Show "Collapse" if expanded, otherwise "Read More" */}
                {expandedPosts[index] ? 'Collapse' : 'Read More'}
              </button>
            </div>
          )}

          <div className={styles['like-container']}>
            {/* Display the like button */}
            <button onClick={() => likePost(post.postId)} // Pass the postId
      className={styles['like-button']}
      disabled={likedPosts[post.postId]} // Disable if post is liked
    >

              {/* Show "Liked" if post is liked, otherwise "Like" */}
              {likedPosts[post.id] ? 'Liked' : 'Like'}
            </button>
            {/* Display the count of likes */}
            <span className={styles['like-count']}>{post.likes}</span>
          </div>
        </div>
      </div>
    ))}
  </main>
);
          }