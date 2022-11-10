-- CreateTable
CREATE TABLE `Telefones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `principal` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Documentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pessoa` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `documento` VARCHAR(191) NOT NULL,
    `numero_de_registro` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Telefones` ADD CONSTRAINT `Telefones_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documentos` ADD CONSTRAINT `Documentos_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
