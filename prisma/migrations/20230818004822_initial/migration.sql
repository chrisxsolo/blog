/*
  Warnings:

  - You are about to drop the column `content` on the `Likes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Likes` table. All the data in the column will be lost.
  - Added the required column `postId` to the `Likes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Likes" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "postId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
