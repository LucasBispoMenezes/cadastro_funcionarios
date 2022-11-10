-- CreateTable
CREATE TABLE `Enderecos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `principal` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
