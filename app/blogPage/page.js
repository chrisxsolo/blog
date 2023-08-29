"use client";

// This is the app/blog/page.js file that renders the blog posts
import React, { useState, useEffect } from "react";
import styles from "./blogpage.module.css";
import Image from "next/image";
import Link from "next/link"; // Import the Link component from Next.js

export default function BlogPage() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('/api/get-blogs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching blog post:', error));
    }, []);

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Awesome Blog</h1>
            <div className={styles.grid}>
                <Link href={`/nicole`} passHref> {/* Replace /blog/${post.id} with your actual blog post URL */}
                    <a className={styles.cardLink}>
                        <div className={styles.card}>
                            <Image src={post.titleImage} alt={post.title} width={300} height={200} />
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <p className={styles.postDate}>{post.date}</p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}