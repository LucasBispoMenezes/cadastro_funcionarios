-- CreateTable
CREATE TABLE `contaBancarias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `banco` VARCHAR(191) NOT NULL,
    `agencia` VARCHAR(191) NOT NULL,
    `conta` VARCHAR(191) NOT NULL,
    `principal` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contaBancarias` ADD CONSTRAINT `contaBancarias_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
