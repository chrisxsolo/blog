// pages/api/submit-likes.js
import prisma from '../../lib/prisma';

export default async function handle(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { postId } = req.body;

  try {
    // Find the post by its ID
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Update the likes count in the posts table
    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: post.likes + 1, // Increment likes count by 1
      },
    });

    return res.status(200).json({ likes: updatedPost.likes });
  } catch (error) {
    console.error('Error adding like:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
