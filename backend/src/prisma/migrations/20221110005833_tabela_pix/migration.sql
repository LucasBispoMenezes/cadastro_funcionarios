-- CreateTable
CREATE TABLE `Pix` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_banco` INTEGER NOT NULL,
    `chave` VARCHAR(191) NOT NULL,
    `principal` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pix` ADD CONSTRAINT `Pix_id_banco_fkey` FOREIGN KEY (`id_banco`) REFERENCES `contaBancarias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
