import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'GET') {
    // Retrieve the latest Likes record
    const latestLikes = await prisma.likes.findFirst({
      orderBy: {
        id: 'desc',
      },
    });

    res.json(latestLikes);
  } else if (req.method === 'POST') {
    // Handle the "Like" button click and update the likes count in the database
    const { postId } = req.body;

    try {
      // Find the post by its ID
      const post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });

      // Rest of your like handling logic...

    } catch (error) {
      console.error('Error adding like:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
