/*
  Warnings:

  - You are about to alter the column `img` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - Made the column `postId` on table `PostDetail` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Post` MODIFY `img` JSON NOT NULL;

-- AlterTable
ALTER TABLE `PostDetail` MODIFY `postId` VARCHAR(191) NOT NULL;
