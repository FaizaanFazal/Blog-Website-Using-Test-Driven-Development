/*
  Warnings:

  - A unique constraint covering the columns `[tagId]` on the table `Blog_Tags` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Blog_Tags_tagId_key" ON "Blog_Tags"("tagId");
