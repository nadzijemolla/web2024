-- CreateTable
CREATE TABLE `PostDetail` (
    `_id` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `utilities` VARCHAR(191) NULL,
    `pet` VARCHAR(191) NULL,
    `income` VARCHAR(191) NULL,
    `size` INTEGER NULL,
    `school` INTEGER NULL,
    `bus` INTEGER NULL,
    `restaurant` INTEGER NULL,
    `postId` VARCHAR(191) NULL,

    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
