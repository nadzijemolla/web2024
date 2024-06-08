/*
  Warnings:

  - You are about to drop the `PostDetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `desc` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `bus` INTEGER NULL,
    ADD COLUMN `desc` VARCHAR(191) NOT NULL,
    ADD COLUMN `income` VARCHAR(191) NULL,
    ADD COLUMN `pet` VARCHAR(191) NULL,
    ADD COLUMN `restaurant` INTEGER NULL,
    ADD COLUMN `school` INTEGER NULL,
    ADD COLUMN `size` INTEGER NULL,
    ADD COLUMN `utilities` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `PostDetail`;
