import prisma from '../../lib/prisma';

export default async function handle(req, res) {
    const recentBlog = await prisma.blogPost.findFirst({
        orderBy: {
            id: 'desc',
        },
    });
    res.json(recentBlog);
}
