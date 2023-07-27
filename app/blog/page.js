// pages/blog.js
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './blog.module.css';
import NavBar from '../components/NavBar';


const blogPosts = [
    {
      title: "Shoot with Nicole: Finding Balance",
      timestamp: "2023-07-26 ",
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
    // Use state to keep track of expanded blog posts (whether the "Read More" button is clicked or not)
    const [expandedPosts, setExpandedPosts] = useState({});
  
    // Function to handle the click event of the "Read More" button
const handleReadMoreClick = (index) => {
    // Toggle the expanded state for the clicked blog post using the index as a key
    
    // Use the setExpandedPosts function to update the state of expandedPosts.
    // The function takes the previous state (prevState) as an argument and returns a new state object.
    // The new state object is created using the spread operator (...prevState), which copies all the key-value pairs from the previous state.
    // We then update the value of the index key in the new state object.
    // The value is set to the opposite of its current value using the logical NOT operator (!prevState[index]).
    // If the current value is true, it becomes false, and if it's false, it becomes true.
    // This way, the function toggles the expanded state for the clicked blog post when the "Read More" button is clicked.
    // The "index" parameter is used as the key to identify the specific blog post in the state that needs to be expanded or collapsed.
    // The "expandedPosts" state keeps track of which blog posts are expanded (true) and which are collapsed (false).
    setExpandedPosts((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  
  
    // Return JSX for the Blog page
    return (
      <main>
        {/* Render the NavBar component */}
        <div className={styles['navbar-container']}>
          <NavBar />
        </div>
  
        {/* Display the title */}
        <div className={styles.title}>
          <h2>Thoughts.</h2>
        </div>
  
        {/* Map through the blogPosts array to render each blog post */}
        {blogPosts.map((post, index) => (
          // Use the index as the key for the blog post
          <div key={index} className={styles.blogPost}>
            {/* Render the blog title and timestamp */}
            <div className={styles['blog-title']}>
              <h3>{post.title}</h3>
              <p className={styles['timestamp']}>{post.timestamp}</p>
            </div>
  
            {/* Render the blog content, which can contain text and/or images */}
            <div className={styles['blog-content']}>
              {post.content.map((section, sectionIndex) => (
                // Use the sectionIndex as the key for each content section
                <div key={sectionIndex} className={styles['content-section']}>
                  {/* Check if the content section is an image */}
                  {section.type === 'image' && (
                    <div className={styles['blog-img']}>
                      {/* Use the next/image component to display the image */}
                      <Image src={section.imageUrl} alt={`Image ${sectionIndex + 1}`} width={400} height={600} />
                    </div>
                  )}
  
                  {/* Check if the content section is text */}
                  {section.type === 'text' && (
                    <div className={styles['content-text']}>
                      {/* Show only a limited amount of text or full text based on the expanded state */}
                      <p>
                        {expandedPosts[index] ? section.text : section.text.slice(0, 400)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
  
              {/* Check if the blog post contains more text to show */}
              {post.content.some((section) => section.type === 'text' && section.text.length > 400) && (
                <div className={styles['read-more-container']}>
                  {/* Render the "Read More" button */}
                  <button onClick={() => handleReadMoreClick(index)} className={styles['read-more']}>
                    
{/* Conditional expression to determine the text for the "Read More" button */}
{/* If the blog post at the current index (index) is expanded (the 'expandedPosts' state contains a truthy value for this index), */}
{expandedPosts[index] ? 'Collapse' : 'Read More'}
{/* then display the text 'Collapse' for the button, indicating that clicking it will collapse or hide the additional content. */}
{/* Otherwise, if the blog post at the current index is not expanded (the 'expandedPosts' state contains a falsy value for this index), */}
{/* display the text 'Read More' for the button, indicating that clicking it will reveal or show the rest of the content. */}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
    );
  }